import plugin from "tailwindcss/plugin";
import hexRgb from "hex-rgb";

import themes from "./themes.json";

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex: string) {
	const { red, green, blue } = hexRgb(hex);
	return `${red} ${green} ${blue}`;
}

/*
  ------------------------------
  1. Write a helper function that takes an input, 
  and outputs the correct CSS-in-JS object 
  to create the CSS variables.

  Here's the format we're expecting:
  
  ```
  {
    '--primary-500': getRgbChannels('#6b70fc'),
    ...,
    '--secondary-some-nested-color': getRgbChannels('#0099aa'),
  }
  ```
  ------------------------------
*/
function getCssVariableDeclarations(input, output = {}) {
	// TODO
	return output;
}

// ------------------------------
// Plugin definition
// ------------------------------

export default plugin(
	function ({ addBase }) {
		addBase({
			":root": {
				"--primary-50": getRgbChannels(themes.base.primary["50"]),
				"--primary-100": getRgbChannels(themes.base.primary["100"]),
				"--primary-200": getRgbChannels(themes.base.primary["200"]),
				"--primary-300": getRgbChannels(themes.base.primary["300"]),
				"--primary-400": getRgbChannels(themes.base.primary["400"]),
				"--primary-500": getRgbChannels(themes.base.primary["500"]),
				"--primary-600": getRgbChannels(themes.base.primary["600"]),
				"--primary-700": getRgbChannels(themes.base.primary["700"]),
				"--primary-800": getRgbChannels(themes.base.primary["800"]),
				"--primary-900": getRgbChannels(themes.base.primary["900"]),
			},
		});
		Object.entries(themes).forEach(([key, value]) => {
			addBase({
				[`[data-theme="${key}"]`]: {
					"--primary-50": getRgbChannels(value.primary["50"]),
					"--primary-100": getRgbChannels(value.primary["100"]),
					"--primary-200": getRgbChannels(value.primary["200"]),
					"--primary-300": getRgbChannels(value.primary["300"]),
					"--primary-400": getRgbChannels(value.primary["400"]),
					"--primary-500": getRgbChannels(value.primary["500"]),
					"--primary-600": getRgbChannels(value.primary["600"]),
					"--primary-700": getRgbChannels(value.primary["700"]),
					"--primary-800": getRgbChannels(value.primary["800"]),
					"--primary-900": getRgbChannels(value.primary["900"]),
				},
			});
		});
	},
	{
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
	}
);
