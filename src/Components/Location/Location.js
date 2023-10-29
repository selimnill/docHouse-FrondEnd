import React from 'react';
import './Location.css'
import { FaSearchLocation } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";




const Location = () => {
    return (
        <div>
            <div className='info-container mt-20 flex justify-center text-white'>
                <div className='information flex bg-slate-800 p-5 w-80 h-40 rounded-xl justify-center items-center'>
                    <p className='icons text-5xl mx-2'><FaSearchLocation /></p>
                    <div>
                        <h3 className="text-2xl font-bold">Visit Our Location</h3>
                        <p className='font-semibold'>NY 12444, California, USA</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-9 justify-center '>
                <div className='info-container mt-20 text-white '>
                    <div className='information flex bg-yellow-500 text-black p-5 w-80 h-40 rounded-xl justify-center items-center'>
                        <p className='icons text-5xl mx-2'><FaClock /></p>
                        <div>
                            <h3 className="text-2xl font-bold">Opening Hours</h3>
                            <p className='font-semibold'>10 am To 5 pm</p>
                        </div>
                    </div>
                </div>
                <div className='info-container mt-20 '>
                    <div className='information  text-black flex bg-yellow-500 p-5 w-80 h-40 rounded-xl justify-center items-center'>
                        <p className='icons text-5xl mx-2'><FaPhoneVolume /></p>
                        <div>
                            <h3 className="text-2xl font-bold">Contact Us</h3>
                            <p className='font-semibold'>+440 1856 23645</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;