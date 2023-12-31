import TableRows from "./TableRows";

export default function ColorsTable({ colors }: { colors: object }) {
	return (
		<table className="-mx-4 mt-6 border-separate border-spacing-4">
			{/* <thead>
    <tr class="bg-gray-100">
      <td class="px-4 py-2 text-center font-mono text-xs">Base</td>
      <td class="px-4 py-2 text-center font-mono text-xs">Rain...</td>
      <td class="px-4 py-2 text-center font-mono text-xs">Candy</td>
      <td class="px-4 py-2 font-mono text-xs">Color name</td>
    </tr>
  </thead> */}
			<tbody>
				<TableRows colors={colors} />
			</tbody>
		</table>
	);
}
