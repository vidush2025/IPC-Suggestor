import React, { useState } from "react";
// import { Router } from "react-router-dom";
import options from "../../images/options.png"
import home from "../../images/homeButton.jpg"
import ashokChakra from "../../images/ashokChakra.png"
import ladyOfJustice from "../../images/ladyOfJustice.png"
import { NavLink } from "react-router-dom";

function Header (){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [homeButton, setHomeButton] = useState(false)

    return(
        <header className=" bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
        {/* Left Side - Options Button */}
            <div>
                <button className="p-2 rounded-lg hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <img src={options} className="w-10 h-10 rounded-3xl" alt="Options" />
                </button>
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
                            <ul className="p-2 space-y-2">
                                <li><NavLink to="/ipcBook" className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsDropdownOpen(false)}
                                >The Indian Penal Code</NavLink></li>
                                <li><NavLink to="/CrPCBook" className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsDropdownOpen(false)}
                                >The Criminal Code of Conduct</NavLink></li>
                                {/* <li><NavLink to="/high-courts" className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsDropdownOpen(false)}
                                >High Courts</NavLink></li>
                                <li><NavLink to="/about" className="block px-4 py-2 hover:bg-gray-700">About Us</NavLink></li>
                                <li><NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</NavLink></li> */}
                            </ul>
                        </div>
                    )}

                <button className="p-2 rounded-lg hover:bg-gray-600"
                    onClick={() => setHomeButton(!homeButton)}
                >
                    <NavLink to="/">
                        <img src={home} className="w-10 h-10 rounded-3xl" alt="Home" />
                    </NavLink>    
                </button>

            </div>

            {/* Right Side - Two Images */}
            <div className="flex space-x-4">
                <NavLink to="/login">Login</NavLink>
                <img src= {ashokChakra} alt="First" className="h-10 w-10 rounded-lg object-contain" />
                <img src={ladyOfJustice} alt="Second" className="h-10 w-10 rounded-lg" />
            </div>
        </header>
    )
    
}

export default Header