import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Service = (props) => {
    const { id, title, img, desc } = props.service;
    return (
        <HashLink smooth to={`service/${id}#top`}>
            <div className="p-8 h-full py-10 flex justify-center items-start border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="h-full space-y-4 flex justify-between items-center flex-col">
                    <img className="w-32 mx-auto" src={img} alt="" />
                    <h2 className="text-2xl xs:text-xl font-bold text-center">{title}</h2>
                    <p className="text-center">{desc}</p>
                    <button to={`service/${id}#top`} className="px-6 py-2 bg-blue-900 text-white font-semibold shadow-none hover:opacity-90 hover:shadow-xl transition-all duration-300">Details</button>
                </div>
            </div>
        </HashLink>
    );
};

export default Service;