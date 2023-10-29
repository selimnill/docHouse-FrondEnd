import React from 'react';
import p1 from '../../assets/images/cavity.png'
import p2 from '../../assets/images/fluoride.png'
import p3 from '../../assets/images/whitening.png'
import p4 from '../../assets/images/treatment.png'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h3 className="text-2xl text-yellow-500 font-bold text-center mt-20 mb-10">Our Services</h3>
            <h1 className="text-3xl font-semibold text-center mb-36">Serivces We Provide</h1>
            <div className='flex justify-center items-center gap-10 mt-16'>
                <div className='services-info bg-slate-800 rounded-xl text-white p-10 w-80 '>
                    <img className='mb-3 mx-auto' src={p1} alt="" />
                    <h3 className="text-xl text-center">Cavity Filling</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, maxime?</p>
                </div>
                <div className='services-info bg-slate-800 rounded-xl text-white p-10 w-80 '>
                    <img className='mb-3 mx-auto' src={p2} alt="" />
                    <h3 className="text-xl text-center">Fluoride Treatment</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, maxime?</p>
                </div>
                <div className='services-info bg-slate-800 rounded-xl text-white p-10 w-80 '>
                    <img className='mb-3 mx-auto' src={p3} alt="" />
                    <h3 className="text-xl text-center">Teeth Whitening</h3>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, maxime?</p>
                </div>
            </div>

            <div className='flex justify-center items-center mt-60'>
                <div>
                    <img className='rounded w-96' src={p4} alt="" />
                </div>
                <div className='ml-14'>
                    <h1 className="text-3xl font-bold">Exceptional Dental <br />Care on your terms.</h1>
                    <p className='mt-3 w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita. Autem laboriosam reprehenderit dicta doloremque sapiente veniam soluta placeat obcaecati enim inventore, porro ducimus beatae, similique iure esse cupiditate sit provident amet tenetur aperiam eos quo, officia quidem perferendis. Sapiente!</p> <br /> <br />
                    <Link to='/appointment'><button className="btn bg-gradient-to-r from-yellow-500  to-orange-500 rounded font-bold">get started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;