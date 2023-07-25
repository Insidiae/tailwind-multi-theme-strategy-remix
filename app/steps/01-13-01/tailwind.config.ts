import type { Config } from "tailwindcss";
import multiThemePlugin from "./multi-theme-plugin";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	/*
  ------------------------------
  TODO:
  Import the themes from `./themes.json` and pass those
  as an option to the multi-theme plugin.
  ------------------------------
*/
	plugins: [multiThemePlugin],
} satisfies Config;
