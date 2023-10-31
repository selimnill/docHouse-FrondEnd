import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import React, {useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selected }) => {

    // const [appointments, setAppointments] = useState([]);
    const [bookingModal, setBookingModal] = useState(null);
    const date = format(selected, 'PP');


    const { data: appointment = [], refetch, isLoading } = useQuery({
        queryKey: ['appointment', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointment?date=${date}`);  ///v2/appointmentOptions?date=${date}
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <p className='text-4xl font-bold text-center mb-20'><span className="loading loading-dots loading-lg"></span></p>
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-700 text-center">Available Appointments on {format(selected, 'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointment.map(option => <AppointmentOptions
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
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;