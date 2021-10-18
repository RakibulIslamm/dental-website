import React from 'react';
// import doctor from '../../../images/doctors-img-2@2x.jpg'

const Doctor = (props) => {
    const { name, img, title } = props.doctor;
    return (
        <div className="py-8">
            <img className="w-60 h-60 mx-auto object-cover rounded-full" src={img} alt="" />
            <h2 className="text-3xl text-center font-bold mt-4">{name}</h2>
            <p className="text-xl text-center font-semi-bold">{title}</p>
        </div>
    );
};

export default Doctor;