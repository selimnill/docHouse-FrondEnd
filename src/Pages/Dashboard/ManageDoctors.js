import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmDelete from '../../Components/ConfirmDelete/ConfirmDelete';
import toast from 'react-hot-toast';


const ManageDoctors = () => {
    const [doctor, setDoctors] = useState('');
    const [deleteDoctor, setDeleteDoctor] = useState(null);


    const closeModal = () => {
        setDeleteDoctor(null);
    }

    const { data: doctorss = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            fetch("https://doc-house-server-one.vercel.app/doctors", {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setDoctors(data);
                    console.log(data);
                })
        }
    });

    console.log(doctorss);

    const deleteDoctorButton = doctor => {
        fetch(`https://doc-house-server-one.vercel.app/doctors/${doctor?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${doctor?.name} deleted successfully.!`)
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-5 mb-7">Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Images</th>
                            <th>Doctor's Name</th>
                            <th>Specialist Categories</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctor && doctor.map((dct, i) => <tr key={dct._id} >
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={dct.image} alt='' />
                                    </div>
                                </div>
                                <td>{dct.name}</td>
                                <td>{dct.categories}</td>
                                <td>{dct.email}</td>
                                <td>
                                    <label onClick={() => setDeleteDoctor(dct)} htmlFor="deleteModal" className="btn  bg-red-700 text-white ">delete</label>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                doctor && <ConfirmDelete
                title={"Are you sure want to delete.?"}
                // message={`If you delete ${deleteDoctor?.name} it can't be recovered.!`}
                message={`If you delete ${deleteDoctor?.name} it can't be recovered.!`}
                deleteDoctor={deleteDoctor}
                deleteDoctorButton={deleteDoctorButton}
                closeModal={closeModal}
                ></ConfirmDelete>
            }
        </div>
    );
};

export default ManageDoctors;