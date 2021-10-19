import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
    return (
        <div className={`absolute top-0 left-0 ${props.active ? 'w-0' : 'w-10/12'} h-screen bg-blue-300 text-white transition-all duration-200`}>
            {!props.active && <button className=" text-gray-800 font-bold absolute right-5 top-5" onClick={() => props.toggle()}>&#x2715;</button>}
            <div className=" h-screen w-full flex justify-center items-center">
                <div className={`${props.active ? 'hidden' : 'block'} w-full text-center`}>
                    <h1 className="text-3xl font-bold text-gray-800">Dental</h1>
                    <div className="mt-8 w-full text-gray-800 font-semibold uppercase">
                        <NavLink onClick={() => props.toggle()} className="block hover:bg-blue-900 hover:text-white py-5 transition-all duration-200" to="/home">Home</NavLink>
                        <NavLink onClick={() => props.toggle()} className="block hover:bg-blue-900 hover:text-white py-5 transition-all duration-200" to="/services">Services</NavLink>
                        <NavLink onClick={() => props.toggle()} className="block hover:bg-blue-900 hover:text-white py-5 transition-all duration-200" to="/about">About Us</NavLink>
                        <NavLink onClick={() => props.toggle()} className="block hover:bg-blue-900 hover:text-white py-5 transition-all duration-200" to="/appointment">Appointment</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;