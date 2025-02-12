import React from "react";
import { Link, NavLink } from "react-router-dom";
function Footer(){
    return(
        <footer className="bg-gray-900 text-white p-14">
            <div className="flex justify-between items-center w-full">
                {/* Left Side - Images and Text */}
                <div className="w-2/3">
                    <div className="flex space-x-4 mb-4">
                        <img src="image1.png" alt="First" className="h-12 w-12 rounded-lg" />
                        <img src="image2.png" alt="Second" className="h-12 w-12 rounded-lg" />
                        <img src="image3.png" alt="Third" className="h-12 w-12 rounded-lg" />
                        <img src="image4.png" alt="Fourth" className="h-12 w-12 rounded-lg" />
                    </div>
                    <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    </p>
                </div>
                
        
                {/* Right Side - Unordered List */}
                <div className="w-1/3 ml-auto">
                    <ul className="space-y-2 text-gray-300">
                        <li><NavLink href="#" className="hover:text-gray-100">About Us</NavLink></li>
                        <li><NavLink href="#" className="hover:text-gray-100">Contact Us</NavLink></li>
                        <li><NavLink href="#" className="hover:text-gray-100">Terms & Conditions</NavLink></li>
                        <li><NavLink href="#" className="hover:text-gray-100">Privacy Policy</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    
    )
}


export default Footer