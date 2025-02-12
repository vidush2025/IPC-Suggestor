import React from "react";

export default function NewCase(){

    return(
        <div className="bg-slate-600 py-10">
            <div className="max-w-3xl mx-auto p-6 bg-blue-300 shadow-2xl rounded-lg">
                    <h2 className="text-2xl text-white mb-4 bg-blue-800 rounded-md font-bold p-4">Basic Details</h2>
                    
                    <form className="space-y-4 pt-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Middle Name (Optional)" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Last Name (Optional)" className="border p-2 rounded w-full" />
                        </div>

                        {/* Date, Location, Time */}
                        <div className="grid grid-cols-2 gap-4">
                            <input type="date" className="border p-2 rounded w-full" required />
                            <input type="text" placeholder="Location" className="border p-2 rounded w-full" required />
                        </div>
                        <input type="time" className="border p-2 rounded w-full" required />

                        {/* Additional FIR Details */}
                        <h2 className="text-xl bg-blue-600 rounded-md font-bold p-4 text-white mt-6">Additional Details</h2>
                        <div className="space-y-2">
                            <input type="text" placeholder="Crime Type (e.g., Theft, Assault, Fraud)" className="border p-2 rounded w-full" required />
                            <input type="text" placeholder="Suspect Details (if any)" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Witness Details (if any)" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Evidence (if available)" className="border p-2 rounded w-full" />
                        </div>

                        {/* Description */}
                        <h2 className="text-xl bg-blue-600 rounded-md font-bold p-4 text-white mt-6 ">Crime Description</h2>
                        <textarea 
                            placeholder="Provide a detailed description of the crime scene and any relevant details..."
                            className="border p-2 rounded w-full h-32"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Submit FIR
                        </button>
                    </form>
                </div>
        </div>
    )
}