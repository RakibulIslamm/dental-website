import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Service from './Service/Service';

const Services = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-gray-200 text-gray-900 text-4xl font-bold flex justify-center items-center">
                <PageTitle title="Services"></PageTitle>
            </div>
            <div className="px-12 grid grid-cols-3 gap-4 align-middle my-16">
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;