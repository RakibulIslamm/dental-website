import React from 'react';
import useData from '../../useData/useData';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Service from './Service/Service';

const Services = () => {
    const { services } = useData();
    return (
        <div className="min-h-screen" id="services">
            <div className="bg-gray-200 text-gray-900 text-4xl font-bold flex justify-center items-center">
                <PageTitle title="Services"></PageTitle>
            </div>
            <div className="px-12 grid grid-cols-3 gap-4 align-middle my-12">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;