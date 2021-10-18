import React from 'react';
import useData from '../../useData/useData';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useData();
    return (
        <div className="min-h-screen">
            <div className="bg-gray-200 text-gray-900 text-4xl font-bold flex justify-center items-center">
                <PageTitle title="Doctors"></PageTitle>
            </div>
            <div className="px-12 grid grid-cols-3 gap-4 align-middle py-12">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;