import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import img from '../../images/Mailbox-bro.svg';

const Contact = () => {
    return (
        <div className="contact">
            <div className="bg-gray-200 text-gray-900 text-4xl font-bold flex justify-center items-center">
                <PageTitle title="Contact Us"></PageTitle>
            </div>

            <h1 className="text-center text-3xl font-bold mt-10 -mb-16">Have some question?</h1>

            <div className="min-h-screen flex justify-between xs:justify-center sm:justify-center items-center xs:flex-col sm:flex-col xs:my-10 sm:my-10 px-12">
                <div className="w-6/12 xs:w-full sm:w-full">
                    <img className=" xs:ml-auto" src={img} alt="" />
                </div>
                <form className="w-full max-w-lg mr-auto xs:mx-auto sm:mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="John Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-gray-700 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;