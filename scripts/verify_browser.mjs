import puppeteer from "puppeteer-core";
import path from "path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ARTIFACT_DIR = "C:\\Users\\asus\\.gemini\\antigravity\\brain\\c99681a6-f4bc-411f-9f72-4cee27c7feb6";

async function runQA() {
  console.log("Launching Chrome at:", CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  const consoleWarns = [];

  page.on("console", (msg) => {
    const text = msg.text();
    if (msg.type() === "error") {
      consoleErrors.push(text);
      console.error("[Browser Error]", text);
    } else if (msg.type() === "warn") {
      consoleWarns.push(text);
      console.warn("[Browser Warn]", text);
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.toString());
    console.error("[Page Error]", err);
  });

  const viewports = [
    { name: "desktop_1440", width: 1440, height: 900 },
    { name: "laptop_1024", width: 1024, height: 768 },
    { name: "tablet_768", width: 768, height: 1024 },
    { name: "mobile_390", width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Wait 1s for GSAP to settle
    await new Promise((r) => setTimeout(r, 1000));

    // Check for horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`  Horizontal overflow: ${hasHorizontalOverflow ? "FAIL" : "PASS (No overflow)"}`);

    // Capture initial screenshot
    const shotPath = path.join(ARTIFACT_DIR, `qa_${vp.name}_hero.png`);
    await page.screenshot({ path: shotPath });
    console.log(`  Saved screenshot: ${shotPath}`);

    if (vp.name === "desktop_1440") {
      // Test scroll storytelling at different points
      const scrollPoints = [
        { label: "interior_stage", y: 1400 },
        { label: "features_story", y: 2800 },
        { label: "manifesto_dark", y: 4200 },
        { label: "audience_specs", y: 5600 },
        { label: "prefooter_cta", y: 7200 },
      ];

      for (const sp of scrollPoints) {
        await page.evaluate((y) => window.scrollTo(0, y), sp.y);
        await new Promise((r) => setTimeout(r, 800));
        const spPath = path.join(ARTIFACT_DIR, `qa_${vp.name}_${sp.label}.png`);
        await page.screenshot({ path: spPath });
        console.log(`  Saved scroll state: ${spPath}`);
      }
    }
  }

  await browser.close();

  console.log("\n================ QA RESULTS ================");
  console.log("Total Console Errors:", consoleErrors.length);
  console.log("Total Console Warnings:", consoleWarns.length);
  if (consoleErrors.length > 0) {
    console.log("Console Errors:", consoleErrors);
  }
}

runQA().catch((e) => {
  console.error("QA script failed:", e);
  process.exit(1);
});
