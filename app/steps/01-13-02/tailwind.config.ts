import type { Config } from "tailwindcss";
import multiThemePlugin from "./multi-theme-plugin";

import colorThemes from "./themes.json";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	/*
  ------------------------------
  Import the themes from `./themes.json` and pass those
  as an option to the multi-theme plugin.
  ------------------------------
*/
	plugins: [multiThemePlugin({ colorThemes })],
} satisfies Config;
