import React, { useState } from "react";
import HeroImage from "../../images/supremeCourt.jpg"

export default function PoliceAuth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105">
        {/* Login Form (Default) */}
        {!isSignUp ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Police Email Address" className="border p-2 rounded w-full" required />
              <input type="password" placeholder="Password" className="border p-2 rounded w-full" required />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">Login</button>
            </form>
            <p className="text-center mt-4 text-sm">
              New here? <button className="text-blue-600 hover:underline" onClick={() => setIsSignUp(true)}>New Sign-in</button>
            </p>
          </div>
        ) : (
          /* Sign Up Form */
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="border p-2 rounded w-full" required />
              <input type="tel" placeholder="Phone Number" className="border p-2 rounded w-full" required />
              <input type="file" className="border p-2 rounded w-full" required />
              <input type="email" placeholder="Police Email Address" className="border p-2 rounded w-full" required />
              <input type="text" placeholder="Police ID Number" className="border p-2 rounded w-full" required />
              <input type="password" placeholder="Password" className="border p-2 rounded w-full" required />
              <input type="password" placeholder="Re-enter Password" className="border p-2 rounded w-full" required />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full" onClick={() => setIsSignUp(false)}>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
