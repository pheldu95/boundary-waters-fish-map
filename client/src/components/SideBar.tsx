import { useState } from "react";
import { NavLink } from "react-router";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed z-50 p-3 top-[75px] right-85 text-white hover:bg-white/10 rounded-lg transition-colors group cursor-pointer"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`absolute w-full h-0.5 bg-yellowishbone group-hover:bg-redish transition-all duration-300 ease-in-out origin-center ${isOpen
                        ? 'rotate-45 top-1/2 -translate-y-1/2'
                        : 'rotate-0 top-0'
                        }`}></span>
                    <span className={`absolute w-full h-0.5 bg-yellowishbone group-hover:bg-redish transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                    <span className={`absolute w-full h-0.5 bg-yellowishbone group-hover:bg-redish transition-all duration-300 ease-in-out origin-center ${isOpen
                        ? '-rotate-45 top-1/2 -translate-y-1/2'
                        : 'rotate-0 bottom-0'
                        }`}></span>
                </div>
            </button>

            {/*  'translate-x-0' makes siebar go to its normal position '-translate-x-full' makes sidebar go off the screen */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-fishblue z-40 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="flex flex-col p-6 pt-20 space-y-4">
                    <NavLink
                        className="text-yellowishbone hover:text-redish transition-colors duration-200 font-medium"
                        to="/"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="text-yellowishbone hover:text-redish transition-colors duration-200 font-medium"
                        to="/"
                        onClick={() => setIsOpen(false)}
                    >
                        My Fish Log
                    </NavLink>
                    <NavLink
                        className="text-yellowishbone hover:text-redish transition-colors duration-200 font-medium"
                        to="/"
                        onClick={() => setIsOpen(false)}
                    >
                        My Fishing Lures
                    </NavLink>
                </div>
            </div>
            
            {/* allows clicking off of the sidebar to close it */}
            {isOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}