import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Services from '../../Services/Services';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center px-12 bg-red-300">
                <Banner></Banner>
            </div>
            <div className=" bg-yellow-200 py-6 px-12">
                <Services></Services>
            </div>
            <div className="px-12 py-4 bg-blue-200">
                <Counter></Counter>
            </div>
            <div className="px-12 py-4 bg-indigo-400">
                <Doctors></Doctors>
            </div>
        </div>
    );
};

export default Home;