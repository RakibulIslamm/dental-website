import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import aboutImg from '../../images/Dentistry.jpg';

const About = () => {
    return (
        <div className="min-h-screen" id="about">
            <div className="bg-gray-200 text-gray-900 text-4xl font-bold flex justify-center items-center">
                <PageTitle title="About Us"></PageTitle>
            </div>
            <div className="h-full px-12 flex justify-center items-center gap-8 py-16">
                <div className="w-full">
                    <img className="w-3/4 ml-auto" src={aboutImg} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-3xl text-gray-700 font-bold w-8/12">Advanced Equipment and Best Dentists</h1>
                    <p className="text-lg text-gray-700 w-10/12">For us, there are no minor aspects, because a quality result always depends on trifles:</p>
                    <p className="flex gap-2 text-lg text-gray-700"><span className="text-blue-900">&#10004;</span>A wide range of laboratory studies</p>
                    <p className="flex gap-2 text-lg text-gray-700"><span className="text-blue-900">&#10004;</span>Ultrasound examination</p>
                    <p className="flex gap-2 text-lg text-gray-700"><span className="text-blue-900">&#10004;</span>ECG, echocardiography</p>
                    <p className="flex gap-2 text-lg text-gray-700"><span className="text-blue-900">&#10004;</span>Consultations with specialized pediatricians</p>
                </div>
            </div>
            <div className="py-10 bg-gray-100">
                <h1 className="text-3xl text-gray-700 text-center font-bold">Why Choose Us?</h1>
                <div className="mx-12 h-full px-12 flex justify-between items-center gap-8 py-16">
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/44hqY2t/why-choose-us1.png" alt="" />
                            <h3 className="text-lg font-bold">Experienced Doctors</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/jyn6Jhn/why-choose-us2.png" alt="" />
                            <h3 className="text-lg font-bold">20 Years of Experience</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/VwNqGNx/why-choose-us3.png" alt="" />
                            <h3 className="text-lg font-bold">Successful Cases</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/fSBHNnX/why-choose-us4.png" alt="" />
                            <h3 className="text-lg font-bold">Happy  Patient</h3>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-3/4" src="https://i.ibb.co/PrPqVhF/why-choose-us-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;