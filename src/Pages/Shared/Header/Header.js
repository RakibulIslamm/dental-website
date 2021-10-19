import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut, isLoading, setIsLoading, setUser } = useAuth();
    const history = useHistory();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                history.push("/");
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="lg:px-12 lg:py-4 sm:py-2 xs:py-2 bg-blue-900 text-white flex items-center justify-between shadow-lg sticky top-0 z-10 sm:px-2">
            <div className="lg:flex gap-6 w-full font-semibold sm:hidden xs:hidden">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/appointment">Appointment</NavLink>
            </div>
            <div className="w-full flex lg:justify-center sm:justify-start">
                <Link className="flex items-center" to="/">
                    <img className="w-12 xs:w-10" src={logo} alt="" />
                    <span className=" text-3xl xs:text-xl font-bold">Dental</span>
                </Link>
            </div>
            {
                isLoading ? <div className="w-full text-right">Loading...</div> :
                    <div className="w-full">
                        {
                            !user && <div className="w-full flex justify-end items-center gap-8">
                                <Link to="/login">
                                    <button className="font-semibold">Sign In</button>
                                </Link>
                                <Link to="/register">
                                    <button className="font-semibold bg-white py-2 px-8 text-blue-900 xs:hidden">Sign Up</button>
                                </Link>
                            </div>
                        }
                        {
                            user && <div className="w-full flex justify-end items-center gap-8">
                                <p className="text-lg font-semibold xs:hidden">{user.displayName}</p>
                                <button onClick={handleLogOut} className="font-semibold bg-white xs:bg-transparent xs:text-white py-2 px-8 text-blue-900">Sign Out</button>
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default Header;