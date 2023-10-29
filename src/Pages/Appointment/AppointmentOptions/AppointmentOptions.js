import React from 'react';

const AppointmentOptions = ({ option, setBookingModal }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl mt-10">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p className='font-bold text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day.!'}</p>
                <p className="font-bold text-center">{slots.length} <span className="uppercase">{slots.length > 1 ? 'SPACES' : 'SPACE'} available</span>
                </p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" disabled={slots.length === 0} className="btn bg-gradient-to-l from-yellow-500 to-orange-700 
                     font-bold text-white w-48 mt-3"
                      onClick={() => setBookingModal(option)}
                      
                    
                    >Book Appointment</label>
                </div>
            </div>

        </div>

    );
};

export default AppointmentOptions;