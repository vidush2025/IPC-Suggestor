import React from "react";

export default function IpcBook(){
    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <iframe 
                src="/pdfs/CrPCBook.pdf" 
                className="w-full h-[90vh] border-2 border-gray-300 rounded-lg"
                title="CrPC Book"
            ></iframe>
        </div>


    )
}