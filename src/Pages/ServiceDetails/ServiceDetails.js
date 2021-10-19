import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../useData/useData';

const ServiceDetails = () => {
    const { services } = useData();
    const { serviceId } = useParams();

    const service = services.find(s => serviceId.includes(s.id));
    return (
        <div className="h-screen flex justify-around xs:justify-center items-center xs:flex-col sm:flex-col gap-10 xs:gap-2 sm:gap-2 px-12 sm:px-6 sm:my-12" id="top">
            <div className="w-full flex justify-end xs:justify-center sm:justify-center items-center">
                <img className="w-96 xs:w-48" src={service?.img} alt="" />
            </div>
            <div className="w-full flex justify-center items-start xs:items-center sm:items-center flex-col space-y-2">
                <h1 className="text-4xl xs:text-2xl xs:text-center sm:text-2xl font-bold">{service?.title}</h1>
                <p className="text-lg xs:text-base xs:text-center sm:text-center font-medium w-10/12 xs:w-full">{service?.desc}</p>
                <Link className=" block" to="/appointment">
                    <button className="px-6 py-2 bg-blue-900 text-white font-semibold shadow-none hover:opacity-90 hover:shadow-xl transition-all duration-300">Book an appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;