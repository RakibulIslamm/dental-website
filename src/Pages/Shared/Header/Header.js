import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div className="px-12 py-4 bg-gray-50 flex items-center justify-between shadow-lg sticky top-0">
            <div className="flex gap-6 w-full font-semibold">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="w-full flex justify-center">
                <Link className="flex items-center" to="/">
                    <img className=" w-12" src={logo} alt="" />
                    <span className=" text-3xl font-bold">Dental</span>
                </Link>
            </div>
            <div className="w-full flex justify-end items-center gap-4">
                <Link to="/login">
                    <button className=" font-semibold">Sign In</button>
                </Link>
                <Link to="/register">
                    <button className=" font-semibold bg-red-500 py-1 px-4 rounded-full text-white">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;