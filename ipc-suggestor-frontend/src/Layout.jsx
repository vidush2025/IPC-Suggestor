import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Layout(){
    return(
        <div className="h-full">
            <Header/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
        
    )
}

