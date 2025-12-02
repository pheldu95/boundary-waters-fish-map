import TableHeader from "../tables/TableHeader/TableHeader";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
    headerText: string[];
}

export default function LoadingTablePlaceholder({ headerText }: Props) {
    return (
        <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden w-3/4 mx-auto">
            <table className="w-full text-sm leading-5">
                <thead className="bg-neutral-secondary-soft bg-gray-100">
                    <tr className="border-b border-gray-200">
                        {headerText.map((text) => (
                            <TableHeader key={text} text={text} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr
                        className="h-[600px] even:bg-gray-50 odd:bg-white border-b border-gray-200"
                    >
                        <td colSpan={headerText.length} className="text-center text-gray-500">
                            <div className="flex justify-center items-center h-full">
                                <LoadingSpinner />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
