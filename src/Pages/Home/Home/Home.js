import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../useData/useData';
import Doctor from '../../Doctors/Doctor/Doctor';
import Service from '../../Services/Service/Service';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';

const Home = () => {
    const { services, doctors } = useData();
    const homePageService = services.slice(0, 6)
    return (
        <div id="home">
            <Banner></Banner>

            {/* Services */}
            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Services</h1>
                <div className="px-12 xs:px-4 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-4 align-middle">
                    {
                        homePageService.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

            <Counter></Counter>

            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Doctors</h1>
                <div className="px-12 xs:px-4 sm:px-6 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-4 align-middle">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;