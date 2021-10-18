import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../../Doctors/Doctor/Doctor';
import Service from '../../Services/Service/Service';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Home Page Services */}
            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Services</h1>
                <div className="px-12 grid grid-cols-3 gap-4 align-middle">
                    <Service></Service>
                    <Service></Service>
                    <Service></Service>
                    <Service></Service>
                    <Service></Service>
                    <Service></Service>
                </div>
            </div>

            <Counter></Counter>

            {/* Home Page Doctors */}
            <div className="py-12">
                <h1 className=" text-4xl text-center font-bold mb-8">Doctors</h1>
                <div className="px-12 grid grid-cols-3 gap-4 align-middle">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
                <Link to="/doctors" className="text-center block text-red-600">See All Doctors &#x3e;&#x3e;</Link>
            </div>

            {/* Call to Action */}
            <div>
                this is call to action
            </div>
        </div>
    );
};

export default Home;