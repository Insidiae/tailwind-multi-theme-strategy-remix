import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";

import { steps } from "~/steps";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Pro Tailwind Workshop: Tailwind Multi-Theme Strategy" },
		{
			name: "description",
			content:
				"Power-up your Tailwind projects with multi-theme, multi-style and multi-project UI components using advanced Tailwind concepts and patterns.",
		},
	];
};

function cx(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Index() {
	return (
		<div className="bg-gray-50">
			<div className="mx-auto max-w-6xl py-16 px-4 md:py-24">
				<h1 className="text-2xl font-semibold text-gray-900">
					Multi-Theme Strategy With Tailwind CSS
				</h1>
				<ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
					{steps.map((step) => (
						<li
							key={step.id}
							className="relative rounded-lg bg-white p-6 shadow transition duration-75 hover:-translate-y-[2px] hover:shadow-md"
						>
							<div className="flex items-center gap-4">
								<p className="font-semibold text-gray-400">{step.id}</p>
								<p
									className={cx(
										"rounded-lg px-2 py-1 text-xs font-medium uppercase tracking-widest",
										step.tag === "Challenge"
											? "bg-yellow-100 text-yellow-700"
											: "bg-green-100 text-green-700"
									)}
								>
									{step.tag}
								</p>
							</div>
							<p className="mt-3 block text-gray-900 hover:text-indigo-600 hover:underline">
								{step.title}
							</p>
							{/* eslint-disable-next-line */}
							<a
								href={step.url}
								aria-label="Start this step"
								className="absolute inset-0"
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
