import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  const [newCase, setNewCase] = useState(false)

  const images = [
    "../src/images/supremeCourt.jpg",
    "../src/images/scalesOfJustice.jpg",
    "../src/images/hammerAndScales.jpg",
    "../src/images/hammerOnly.jpg"
  ]
  const [currentImage, setCurrentImage] = useState(0);

  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Fade in new image
      }, 300); // Half-second fade transition
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);



  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <img 
        src={images[currentImage]}
        alt="SUPREME COURT OF INDIA" 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Find Relevant IPC Sections for Your Case
        </h1>

        {/* Search Bar */}
        <div className="flex w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
          <input 
            type="text" 
            placeholder="Search for IPC-..." 
            className="w-full p-3 text-gray-800 outline-none"
          />
          <button className="bg-blue-600 px-4 text-white hover:bg-blue-700">
            🔍
          </button>
        </div>

        {/* Register Button */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          onClick={() => setNewCase(!newCase)}
        >
          <NavLink to="/newCase">Register a New Case</NavLink>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentImage ? "bg-white scale-125" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
