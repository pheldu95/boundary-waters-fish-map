
export default function ViewDetailsButton() {
    return (
        <div className="relative group inline-block">
            <button
                className="focus:outline-none disabled:opacity-50 flex items-center justify-center cursor-pointer"
            >
                <i className="fa-solid fa-eye" />
            </button>
            <span
                className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block 
               whitespace-nowrap rounded bg-gray-800 text-white text-xs px-2 py-1"
            >
                View details
            </span>
        </div>
    )
}
