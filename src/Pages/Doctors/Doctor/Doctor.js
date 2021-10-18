import React from 'react';
import doctor from '../../../images/doctors-img-2@2x.jpg'

const Doctor = () => {
    return (
        <div className="py-8">
            <img className="w-60 h-60 mx-auto object-cover rounded-full" src={doctor} alt="" />
            <h2 className="text-3xl text-center font-bold">Dr.Samanta</h2>
            <p className="text-xl text-center font-semi-bold">Dentist_</p>
        </div>
    );
};

export default Doctor;