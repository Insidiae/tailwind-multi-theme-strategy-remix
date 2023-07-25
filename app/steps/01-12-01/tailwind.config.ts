import type { Config } from "tailwindcss";
import multiThemePlugin from "./multi-theme-plugin";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	plugins: [multiThemePlugin],
} satisfies Config;
