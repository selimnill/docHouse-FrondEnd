import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selected }) => {

    const [appointments, setAppointments] = useState([]);
    const [bookingModal, setBookingModal] = useState(null);



    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-700 text-center">Available Appointments on {format(selected, 'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setBookingModal={setBookingModal}
                    ></AppointmentOptions>)
                }
            </div>
            {
                bookingModal && 
                <BookingModal
                bookingModal={bookingModal}
                setBookingModal={setBookingModal}
                selectedDate={selected}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;