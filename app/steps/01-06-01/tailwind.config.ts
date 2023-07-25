import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "rgb(var(--primary-50) / <alpha-value>)",
					100: "rgb(var(--primary-100) / <alpha-value>)",
					200: "rgb(var(--primary-200) / <alpha-value>)",
					300: "rgb(var(--primary-300) / <alpha-value>)",
					400: "rgb(var(--primary-400) / <alpha-value>)",
					500: "rgb(var(--primary-500) / <alpha-value>)",
					600: "rgb(var(--primary-600) / <alpha-value>)",
					700: "rgb(var(--primary-700) / <alpha-value>)",
					800: "rgb(var(--primary-800) / <alpha-value>)",
					900: "rgb(var(--primary-900) / <alpha-value>)",
				},
			},
		},
	},

	plugins: [
		plugin(function ({ addBase }) {
			/*
        ------------------------------
        Replace the "Hello World" CSS below
        with the multi-theme CSS variables
        ------------------------------
      */
			addBase({
				body: {
					textTransform: "uppercase",
				},
			});
		}),
	],
} satisfies Config;
