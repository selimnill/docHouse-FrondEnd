import React from 'react';
// import './Location.css'
import { FaSearchLocation } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";




const Location = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            <div className='info-container mt-20 flex justify-center text-white'>
                <div className='information flex bg-slate-800 p-5 w-80 h-40 rounded-xl justify-center items-center'>
                    <p className='icons text-5xl mx-2'><FaSearchLocation /></p>
                    <div>
                        <h3 className="text-2xl font-bold">Visit Our Location</h3>
                        <p className='font-semibold'>NY 12444, California, USA</p>
                    </div>
                </div>
            </div>
            <div className='info-container mt-20 flex justify-center text-white'>
                <div className='information flex bg-orange-600 p-5 w-80 h-40 rounded-xl justify-center items-center'>
                    <p className='icons text-5xl mx-2'><FaClock /></p>
                    <div>
                        <h3 className="text-2xl font-bold">Opening Hours</h3>
                        <p className='font-semibold'>10 am To 5 pm</p>
                    </div>
                </div>
            </div>
            <div className='info-container mt-20 flex justify-center text-white'>
                <div className='information flex bg-orange-600 p-5 w-80 h-40 rounded-xl justify-center items-center'>
                    <p className='icons text-5xl mx-2'><FaPhoneVolume /></p>
                    <div>
                    <h3 className="text-2xl font-bold">Contact Us</h3>
                        <p className='font-semibold'>+440 1856 23645</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;