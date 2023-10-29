import React from 'react';
import p1 from '../../assets/images/people1.png'
import p2 from '../../assets/images/people2.png'
import p3 from '../../assets/images/people3.png'

const Testimonials = () => {
    return (

        <div>
            <h2 className="text-2xl mt-20 ml-10 text-yellow-800 font-bold">Testimonials</h2>
            <h2 className="text-3xl font-bold ml-10 mt-4">What Our Patients Says</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center ml-12'>
                <div className="card w-96 bg-base-100 shadow-xl mt-16 m-5">
                    <div className="card-body">
                        <div className='mt-16 w-80'>
                            <p className='text-lg'> Lorem, ipsum dolor sit amet consect adipisicing elit. Nobis architecto in voluptatum voluptas error dolorem
                            </p>
                            <div className='flex items-center mt-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img alt='' src={p1} />
                                    </div>
                                    <div className="flex justify-center items-center mx-5"><h3 className="text-xl mt-6 font-semibold">                        Jack Sparrow
                                    </h3>
                                        <p>United States</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-16">
                    <div className="card-body">

                        <div className='mt-16 w-80'>
                            <p className='text-lg'> Lorem, ipsum dolor sit amet consect adipisicing elit. Nobis architecto in voluptatum voluptas error dolorem
                            </p>
                            <div className='flex items-center mt-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img alt='' src={p2} />
                                    </div>
                                    <div className="flex justify-center items-center mx-5"><h3 className="text-xl mt-6 font-semibold">                        Jackline Dhak
                                    </h3>
                                        <p>United States</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-16">
                    <div className="card-body">

                        <div className='mt-16 w-80'>
                            <p className='text-lg'> Lorem, ipsum dolor sit amet consect adipisicing elit. Nobis architecto in voluptatum voluptas error dolorem
                            </p>
                            <div className='flex items-center mt-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img alt='' src={p3} />
                                    </div>
                                    <div className="flex justify-center items-center mx-5"><h3 className="text-xl mt-6 font-semibold">                        Angle Rose
                                    </h3>
                                        <p>United States</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;