import plugin from "tailwindcss/plugin";
import hexRgb from "hex-rgb";

/*
  ------------------------------
  TODO:
  Remove the themes import line below. Instead,
  pass the themes directly to the plugin
  when registering it in the
  config file.
  ------------------------------
*/
import themes from "./themes.json";

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex: string) {
	const { red, green, blue } = hexRgb(hex);
	return `${red} ${green} ${blue}`;
}

// Generate CSS variables
function getCssVariableDeclarations(
	input: object,
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

// Generate color extension object
function getColorUtilitiesWithCssVariableReferences(
	input: object,
	path: string[] = []
) {
	return Object.fromEntries(
		Object.entries(input).map(([key, value]): [string, any] => {
			const newPath = path.concat(key);
			if (typeof value !== "string") {
				return [
					key,
					getColorUtilitiesWithCssVariableReferences(value, newPath),
				];
			} else {
				return [key, `rgb(var(--${newPath.join("-")}) / <alpha-value>)`];
			}
		})
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
