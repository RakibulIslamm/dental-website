import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center bg-red-300">
                <div className="px-12">
                    <Banner></Banner>
                </div>
            </div>

            {/* Home Page Services */}
            <div className=" bg-yellow-200 py-6">
                <div className="px-12">
                    Services
                </div>
            </div>
            <div className="px-12 py-4 bg-blue-200">
                <Counter></Counter>
            </div>

            {/* Home Page Doctors */}
            <div className=" bg-yellow-200 py-6">
                <div className="px-12">
                    Doctors
                </div>
            </div>
        </div>
    );
};

export default Home;