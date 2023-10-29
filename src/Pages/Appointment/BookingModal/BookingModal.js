import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookingModal, setBookingModal, selectedDate }) => {
    const { name, slots } = bookingModal;
    const date = format(selectedDate, 'PP');


    const handleBookingForm = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;


        const booking = [
            {
                patient: name,
                selectedDate: date,
                selectedTime: time,
                phone,
                email,
            }
        ]
        console.log(booking);
        setBookingModal(null);

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleBookingForm} className='grid grid-cols-1 gap-3 justify-center items-center mt-8'>
                        <input name='date' type="text" value={date}disabled className="input input-bordered input-error w-full" />
                        <select name='time'required className="select select-bordered select-error w-full">
                            <option disabled selected>Select Time</option>
                            {
                                slots.map((slot, i) => <option
                                    slot={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name"  required className="input input-bordered input-error w-full" />
                        <input name='phone' type="text" placeholder="Phone Number"required className="input input-bordered input-error w-full" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered input-error w-full" />
                        <br />
                        <button className="btn bg-gradient-to-r from-yellow-500 to-orange-700 font-bold text-white">Submit</button>
                    </form>
                    <div className="modal-action justify-center">
                        <label htmlFor="booking-modal"  className="btn ">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;