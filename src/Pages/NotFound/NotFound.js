import React from 'react';
import img404 from '../../images/404-img.png';
import { useHistory } from 'react-router-dom'
const NotFound = () => {
    const history = useHistory();
    return (
        <div className=" py-24 flex justify-center items-center flex-col">
            <img className="w-96" src={img404} alt="" />
            <button onClick={() => history.push('/')} className="font-semibold bg-blue-900 py-2 px-8 text-white">{'<<'} Back Home</button>
        </div>
    );
};

export default NotFound;