export default function TableRows({
	colors,
	path = [],
}: {
	colors: object;
	path?: string[];
}) {
	return (
		<>
			{Object.entries(colors).map(([key, value]) => {
				const newPath = path.concat(key);
				if (typeof value !== "string") {
					return <TableRows key={value} colors={value} path={newPath} />;
				}
				return (
					<tr key={value}>
						<td>
							<div
								data-theme="base"
								className="h-10 w-20 rounded-lg bg-red-100"
								style={{ backgroundColor: `rgb(var(--${newPath.join("-")}))` }}
							/>
						</td>
						<td>
							<div
								data-theme="rainforest"
								className="h-10 w-20 rounded-lg bg-red-100"
								style={{ backgroundColor: `rgb(var(--${newPath.join("-")}))` }}
							/>
						</td>
						<td>
							<div
								data-theme="candy"
								className="h-10 w-20 rounded-lg bg-red-100"
								style={{ backgroundColor: `rgb(var(--${newPath.join("-")}))` }}
							/>
						</td>
						<td>
							<p className="font-mono font-medium text-slate-900">
								{newPath.join("-")}
							</p>
						</td>
					</tr>
				);
			})}
		</>
	);
}
