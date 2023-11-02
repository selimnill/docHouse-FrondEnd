import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const Payment = () => {
    const data = useLoaderData();
    const {treatment, appointmentDate, slot, price} = data;


    if(useNavigation.state === 'loading')
    {
        return <p className='text-xl font-bold text-center'>Loading...</p>
    }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-5 mb-8">Payment</h2>
            <h3 className="text-3xl text-center mb-7">Payment For : <b>{treatment}</b></h3>
            <h5 className="text-xl text-center">Please pay <b>${price}</b> for your Appointment on {appointmentDate} at {slot}</h5>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;