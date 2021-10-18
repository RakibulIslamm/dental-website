import React from 'react';
import counterBanner from '../../../images/dental-clinic-e1489767967707.jpg'

const Counter = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, .9), rgba(30, 58, 138, .9)), url(${counterBanner})`
        }} className=" grid grid-cols-4 gap-4 px-12 py-8 bg-cover bg-center">
            <div className="text-center text-white py-8 space-x-4">
                <h1 className=" text-5xl font-bold">10</h1>
                <h3 className=" text-xl font-semi-bold">Years of experience</h3>
            </div>
            <div className="text-center text-white py-8 space-x-4">
                <h1 className=" text-5xl font-bold">640</h1>
                <h3 className=" text-xl font-semi-bold">Smiling customers</h3>
            </div>
            <div className="text-center text-white py-8 space-x-4">
                <h1 className=" text-5xl font-bold">64</h1>
                <h3 className=" text-xl font-semi-bold">Master certificates</h3>
            </div>
            <div className="text-center text-white py-8 space-x-4">
                <h1 className=" text-5xl font-bold">69</h1>
                <h3 className=" text-xl font-semi-bold">People working</h3>
            </div>
        </div>
    );
};

export default Counter;