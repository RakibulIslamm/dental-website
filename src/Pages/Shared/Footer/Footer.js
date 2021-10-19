import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="px-12 py-12 bg-indigo-900 text-white grid grid-cols-4 gap-4">
            <div className="space-y-3">
                <Link className="flex items-center" to="/">
                    <img className=" w-12" src={logo} alt="" />
                    <span className=" text-3xl font-bold">Dental</span>
                </Link>
                <p>A full range of cosmetic dentistry treatment!</p>
                <Link className=" block" to="/appointment">
                    <button className="px-6 py-2 text-blue-900 bg-white font-semibold shadow-none hover:opacity-90 hover:shadow-xl transition-all duration-300">Book an appointment</button>
                </Link>
            </div>
            <div>
                <h3 className=" text-xl font-bold">OPEN HOURS</h3>
                <div className=" space-y-2 mt-2">
                    <p><b>Monday-</b> 08:00 am - 05:00 pm
                    </p>
                    <p><b>Tuesday-</b> 10:00 am - 07:00 pm
                    </p>
                    <p><b>Wednesday-</b> 09:00 am - 06:00 pm
                    </p>
                    <p><b>Thursday-</b> 09:00 am - 06:00 pm
                    </p>
                    <p><b>Friday-</b> 08:00 am - 04:00 pm
                    </p>
                </div>
            </div>
            <div>
                <h3 className=" text-xl font-bold">KEEP IN TOUCH</h3>
                <div className=" space-y-2 mt-2">
                    <p><b>E-mail:</b> info@example.com
                    </p>
                    <p><b>Call:</b> +(61) 123 456 7890
                    </p>
                    <p><b>Fax:</b> +(61) 123 456 7890
                    </p>
                    <p>The office is in the same parking lot at McDonalds. Haharina street 27, Odessa city.
                    </p>
                </div>
            </div>
            <div>
                <h3 className=" text-xl font-bold">KEEP IN TOUCH</h3>
                <div className=" space-y-2 mt-2">
                    <p><HashLink smooth to="/home#home">Home</HashLink></p>
                    <p><HashLink smooth to="/services#services">Services</HashLink></p>
                    <p><HashLink smooth to="/about#about">About Us</HashLink></p>
                    <p><HashLink smooth to="/contact#contact">Contact Us</HashLink></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;