import type { Config } from "tailwindcss";
import multiThemePlugin from "./multi-theme-plugin";

/*
  ------------------------------
  Offload the responsibility of extending 
  the theme to the plugin itself.
  ------------------------------
*/

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	plugins: [multiThemePlugin],
} satisfies Config;
