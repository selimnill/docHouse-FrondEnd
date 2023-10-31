import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const Allusers = () => {

    // react/tanstack queries for data fetching
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = res.json();
            return data;
        }
    });

    const handleAdminButton = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin updated successfully.!');
                    refetch();
                }
            })

    }

    const handleDeleteButton = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('User Deleted successfully.!');
                    refetch();
                }
            })

    }

    return (
        <div>
            <h2 className="text-3xl font-bold mt-12 mb-12 text-center">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {user?.role !== 'admin' ? <button onClick={() => handleAdminButton(user?._id)} className='btn bg-green-600 text-white font-bold'>Make Admin</button>
                                    : <p className="mx-9 font-bold uppercase">Admin</p>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteButton(user?._id)} className='btn bg-red-700 text-white font-bold'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;