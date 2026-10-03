import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FBF9F5",
          alt: "#F3EFE6",
          dark: "#042217",
        },
        forest: {
          DEFAULT: "#04271B",
          deep: "#021A12",
          surface: "#0A3525",
          light: "#0E4833",
        },
        sage: {
          DEFAULT: "#528472",
          light: "#82AA99",
          tint: "#DCE7E1",
        },
        sand: {
          DEFAULT: "#EDE8DC",
          light: "#F7F5EF",
          dark: "#DCD5C5",
        },
        charcoal: {
          DEFAULT: "#111714",
          soft: "#2A332E",
          muted: "#66726B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        editorial: ["var(--font-editorial)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
      gridColumnStart: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
      },
      gridColumnEnd: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
      },
      spacing: {
        "grid": "clamp(0.75rem, 1.5vw, 1.75rem)",
        "container": "clamp(1.5rem, 4vw, 4.5rem)",
      },
      transitionTimingFunction: {
        "beaucoup": "cubic-bezier(0.25, 1, 0.5, 1)",
        "editorial": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
