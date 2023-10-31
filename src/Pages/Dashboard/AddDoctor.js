import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';



const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const { data: categories } = useQuery({
        queryKey: ['addDoctor'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentCategories/`)
            const data = await res.json()
            return data;
        }
    });


    const imgbbApiKey = process.env.REACT_APP_imgbb_Api_key;

    const addDoctors = (data) => {
        const formData = new FormData();
        const image = data.img[0];
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        categories: data.categories,
                        image: imgData.data.display_url,
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
            })
    }


    return (
        <div className='w-96 p-5 mx-auto'>
            <h2 className="text-4xl font-bold text-center mt-7">Add Doctors</h2>
            <form onSubmit={handleSubmit(addDoctors)}>
                <label className='font-semibold mx-3'>Name</label>
                <input type="name" name='name' className="mt-2 input input-bordered input-success w-full "
                    {...register('name', {
                        required: 'Name is required.!'
                    })}
                />
                {errors.email && <p className='text-red-700 font-bold'>{errors.email?.message}</p>}
                <label className='font-semibold mx-3'>Email</label>
                <input type="email" name='email' className="mt-2 input input-bordered input-success w-full "
                    {...register('email', {
                        required: 'Email address is required.!'
                    })}

                />
                {errors.email && <p className='text-red-700 font-bold'>{errors.email?.message}</p>}
                <select
                    {...register('categories', {
                        required: 'Categories is required.!'
                    })}
                    className="select select-success w-full mt-8">
                    <option disabled selected>Select Categories</option>
                    {
                        categories && categories.map(category => <option key={category?._id} value={category?.name}>{category?.name}</option>)
                    }

                </select>
                <input type="file" name='img' className="mt-8 input input-bordered input-success w-full "
                    {...register('img', {
                        required: 'Image is required.!'
                    })}
                />
                <div className='flex justify-center items-center'>
                    <button className='btn bg-green-700 text-white text-center mt-9' type="submit">Add Doctor</button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;