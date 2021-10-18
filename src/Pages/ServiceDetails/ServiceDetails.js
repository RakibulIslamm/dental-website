import React from 'react';
import { useParams } from 'react-router';
// import img from '../../images/pexels-pixabay-52527.jpg'
import useData from '../../useData/useData';

const ServiceDetails = () => {
    const { services } = useData();
    const { serviceId } = useParams();

    const service = services.find(s => serviceId.includes(s.id));
    return (
        <div className="h-screen flex justify-around items-center gap-10 px-12" id="top">
            <div className="w-full flex justify-end items-center">
                <img className="w-96" src={service?.img} alt="" />
            </div>
            <div className="w-full flex justify-center items-start flex-col space-y-2">
                <h1 className="text-4xl font-bold">{service?.title}</h1>
                <p className="text-lg font-medium w-10/12">{service?.desc}</p>
                <button className="px-6 py-2 bg-blue-900 text-white font-semibold shadow-none hover:opacity-90 hover:shadow-xl transition-all duration-300">Book an appointment</button>
            </div>
        </div>
    );
};

export default ServiceDetails;