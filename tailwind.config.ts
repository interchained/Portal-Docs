import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./routes/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7C3AED",
          cyan: "#06B6D4",
          bg: "#0A0A0F",
          surface: "#13131A",
          border: "#1E1E2E",
          text: "#E8E8F0",
          muted: "#6B6B80",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
