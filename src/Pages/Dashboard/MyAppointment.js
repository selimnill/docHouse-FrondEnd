import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    const { loader } = useContext(AuthContext);

    const url = `https://doc-house-server-one.vercel.app/bookings?email=${user?.email}`;

    // get data from server using query
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    console.log('bookings', bookings);
    if (loader) {
        <span className="loading loading-ball loading-3xl mt-5"></span>
    }

    console.log(bookings);

    return (
        <div className="">
            <h2 className="text-3xl font-bold text-center mt-20 sm:mt-40 mb-5">My Appointments</h2>
            <table className="table w-full sm:w-3/4 md:w-1/2">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings && bookings.map((booking, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{booking?.patient}</td>
                            <td>{booking?.treatment}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
                            <td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn bg-green-700 text-white font-bold btn-sm w-14'>Pay</button></Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500 mx-3 font-bold'>Paid</span>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                bookings.length === 0 && <p className='text-center mt-12 font-bold'>Currently there's no appointment.!</p>
            }
        </div>
    );
};

export default MyAppointment;