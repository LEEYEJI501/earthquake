import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          default: "#c6c6c5",
        },
      },
    },
  },
});
