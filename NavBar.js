import React from 'react';
import './App.css'
import logo from './Images/182310172_padded_logo.png'
function NavBar(){
    return (
        <nav className = "bg primaryColor fixed top-0 w-full z-50 shadow-md">
            <div className = "container mx-auto px-4 py-2 flex justify-between items-center">
                <div className = "flex items-center">
                    <img src = {logo} alt = "Logo"  className = "h-8 w-8 mr-2"/>
                        <span className="text-white font-bold text-xl">The Skidoo</span>
                </div>
                <div className = "flex space-x-6">
                    <a href = "#" className="text-black hover : text-gray-500">Home</a>
                    <a href = "#" className="text-black hover : text-gray-500">About</a>
                    <a href = "#" className="text-black hover : text-gray-500">Services</a>
                    <a href = "#" className="text-black hover : text-gray-500">Contact</a>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded lg hover:bg-blue-800 transition duration-300">Sign Up</button>
                </div>
            </div>
        </nav>


    );
}
export default NavBar;