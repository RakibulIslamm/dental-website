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

            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Services</h1>
                <div className="px-12 grid grid-cols-3 gap-4 align-middle">
                    {
                        homePageService.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

            <Counter></Counter>

            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Doctors</h1>
                <div className="px-12 grid grid-cols-3 gap-4 align-middle">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
                <Link to="/doctors" className="text-center block text-blue-900 underline">See All Doctors &#x3e;&#x3e;</Link>
            </div>
        </div>
    );
};

export default Home;