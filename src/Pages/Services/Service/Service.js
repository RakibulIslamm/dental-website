import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/why choose us3.png'

const Service = () => {
    return (
        <Link>
            <div className="py-12 flex justify-center items-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="space-y-4">
                    <img className="w-32 mx-auto" src={img} alt="" />
                    <h2 className="text-2xl font-bold text-center">Consultation and preventive examination</h2>
                </div>
            </div>
        </Link>
    );
};

export default Service;