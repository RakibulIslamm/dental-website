import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="px-12 py-4 bg-blue-900 text-white flex items-center justify-between shadow-lg sticky top-0 z-10">
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
            {
                !user && <div className="w-full flex justify-end items-center gap-8">
                    <Link to="/login">
                        <button className="font-semibold">Sign In</button>
                    </Link>
                    <Link to="/register">
                        <button className="font-semibold bg-white py-2 px-8 text-blue-900">Sign Up</button>
                    </Link>
                </div>
            }
            {

                user && <div className="w-full flex justify-end items-center gap-8">
                    <p className="text-lg font-semibold">{user.displayName}</p>
                    <button onClick={logOut} className="font-semibold bg-white py-2 px-8 text-blue-900">Sign Out</button>
                </div>
            }
        </div>
    );
};

export default Header;