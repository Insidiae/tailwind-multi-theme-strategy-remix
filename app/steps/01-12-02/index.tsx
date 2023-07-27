import tailwindConfig from "./tailwind.config";
import { getCustomColors } from "~/utils/getCustomColors";
import ColorsTable from "~/components/colors-table";

const customColors = getCustomColors(tailwindConfig);

export default function Snippet() {
	return (
		<div className="m-8">
			<h1 className="text-xl font-medium">Multi-theme colors</h1>
			<p className="mt-4 max-w-md text-slate-700">
				Here are the colors generated from our multi-theme plugin. These are
				pulled directly from the Tailwind config in this page, and iterated
				over.
			</p>

			<ColorsTable colors={customColors} />
		</div>
	);
}
