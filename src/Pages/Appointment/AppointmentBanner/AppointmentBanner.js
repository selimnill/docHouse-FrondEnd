import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import p1 from '../../../assets/images/chair.png'

const AppointmentBanner = ({selected, setSelected}) => {


    return (
        <div className='m-10 lg:w-1/2 mx-auto sm:w-64 '>
            <h2 className="text-2xl font-bold text-center mt-5">Pick a day for your appointment</h2>
            <div className="flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-52 max-w-sm lg:w-1/2 mx-auto ">
                <img src={p1} className='w-96' alt="" />
                <div className='lg:w-1/2 mx-auto md:w-32 sm:w-20'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;