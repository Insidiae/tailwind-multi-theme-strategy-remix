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

// Generate CSS variables
type ThemeColors = { [key: string]: string | ThemeColors };
function getCssVariableDeclarations(
	input: ThemeColors,
	path: string[] = [],
	output: Record<string, string> = {}
) {
	Object.entries(input).forEach(([key, value]) => {
		const newPath = path.concat(key);
		if (typeof value !== "string") {
			getCssVariableDeclarations(value, newPath, output);
		} else {
			output[`--${newPath.join("-")}`] = getRgbChannels(value);
		}
	});
	return output;
}

/*
  ------------------------------
  1. Write a helper function that takes an object
  as input, and outputs the correct object 
  to extend the Tailwind config's
  theme colors.
  ------------------------------
*/
function getColorUtilitiesWithCssVariableReferences(
	input: ThemeColors,
	path: string[] = []
) {
	return Object.fromEntries(
		Object.entries(input).map(
			([key, value]): [string, string | ThemeColors] => {
				const newPath = path.concat(key);
				if (typeof value !== "string") {
					return [
						key,
						getColorUtilitiesWithCssVariableReferences(value, newPath),
					];
				} else {
					return [key, `rgb(var(--${newPath.join("-")}) / <alpha-value>)`];
				}
			}
		)
	);
}

// ------------------------------
// Plugin definition
// ------------------------------

export default plugin(
	function ({ addBase }) {
		addBase({
			":root": getCssVariableDeclarations(Object.values(themes)[0]),
		});
		Object.entries(themes).forEach(([key, value]) => {
			addBase({
				[`[data-theme="${key}"]`]: getCssVariableDeclarations(value),
			});
		});
	},

	/*
  ------------------------------
  2. Extend the user's theme below using the new
  `getColorUtilitiesWithCssVariableReferences`
  function you've just created.
  ------------------------------
*/
	{
		theme: {
			extend: {
				colors: getColorUtilitiesWithCssVariableReferences(
					Object.values(themes)[0]
				),
			},
		},
	}
);
