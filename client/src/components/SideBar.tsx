import { useState } from "react";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-green-500">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
            {
                isOpen ?
                    <div className="absolute z-1 top-0 left-0 h-full w-64 inset-0 bg-gray-800 opacity-75 flex items-center justify-center">
                        Sidebar
                    </div>
                    // <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
                    //     Sidebar
                    // </div>
                    : null
            }

        </div>
    )
}
