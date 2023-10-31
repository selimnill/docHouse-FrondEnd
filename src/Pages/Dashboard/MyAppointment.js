import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    // get data from server using query
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    return (
        <div className="overflow-x-auto">
            <h2 className="text-3xl font-bold text-center mt-5 mb-5">My Appointments</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{booking?.patient}</td>
                            <td>{booking?.treatment}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
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