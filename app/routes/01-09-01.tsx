import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import { steps } from "~/steps";
import Snippet from "~/steps/01-09-01";
import stylesheet from "~/steps/01-09-01/styles.css";

const step = steps.find((step) => step.id === "01-09-01")!;

export const meta: V2_MetaFunction = () => [
	{ title: `${step.id} | ${step.title}` },
];

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

export default function Challenge() {
	return <Snippet />;
}
