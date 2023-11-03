import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'


const BookingModal = ({ bookingModal, setBookingModal, selectedDate, refetch }) => {
    const { name, slots, price } = bookingModal;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);


    const handleBookingForm = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const treatmentName = form.treatmentName.value;
        const phone = form.phone.value;
        const email = form.email.value;


        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);

        fetch('https://doc-house-server-one.vercel.app/bookings', {
            method: 'POST',
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingModal(null);
                    toast.success('Booking Confirmed.!');
                    refetch();
                }
                else {
                    toast.error(data.message);

                }
            })
    }


    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleBookingForm} className='grid grid-cols-1 gap-3 justify-center  items-center mt-8'>
                        <input name='treatmentName' type="text" value={name} disabled className="text-center font-bold input input-bordered input-error w-full" />
                        <input name='date' type="text" value={date} disabled className="input input-bordered input-error w-full" />
                        <select name='slot' defaultValue={slots[0]} required className="select select-bordered select-error w-full">
                            <option disabled selected>Select Time</option>
                            {
                                slots.map((slot, i) => <option
                                    slot={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' value={user?.displayName} type="text" placeholder="Full Name" required className="input input-bordered input-error w-full" />
                        {/* <input name='phone' type="text" placeholder="Phone Number" required className="input input-bordered input-error w-full" /> */}
                        <PhoneInput name='phone'type="text" placeholder="Phone Number" required className="input input-bordered input-error w-full"
                        value={value}
                        onChange={setValue}/>
                        <input name='email' value={user?.email} type="text" placeholder="Email" className="input input-bordered input-error w-full" />
                        <br />
                        <button className="btn bg-gradient-to-r from-yellow-500 to-orange-700 font-bold text-white">Submit</button>
                    </form>
                    <div className="modal-action justify-center">
                        <label htmlFor="booking-modal" className="btn ">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;