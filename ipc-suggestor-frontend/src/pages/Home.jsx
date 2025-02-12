import React from "react";
import Hero from "../components/Hero/Hero"; // Import your Hero Section

function Home() {
  return (
    <div className="bg-orange-500 bg-opacity-75">
      
      <div className="p-4 text-center ">
        <h2 className="text-2xl font-semibold">Welcome to the IPC Section Suggestion System</h2>
        <p className="text-gray-700 mt-2">Find relevant IPC sections based on your case details.</p>
      </div>
      <Hero/>  {/* Hero Section */}
    </div>
  );
}

export default Home;
