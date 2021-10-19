import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`
        }} className="lg:py-48 flex items-center w-full bg-center bg-cover">
            <div className="px-12 h-full flex items-center lg:w-7/12">
                <div className="text-gray-800 space-y-4">
                    <h1 className="text-5xl font-bold">Get the smile you've always wanted —</h1>
                    <p className=" text-2xl">A full range of cosmetic dentistry treatment!</p>
                    <Link className=" block" to="/appointment">
                        <button className="px-6 py-2 bg-blue-900 text-white font-semibold shadow-none hover:opacity-90 hover:shadow-xl transition-all duration-300">Book an appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;