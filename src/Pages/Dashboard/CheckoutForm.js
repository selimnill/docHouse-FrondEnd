import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;
    const navigate = useNavigate();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doc-house-server-one.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),

        })
            .then((res) => res.json())
            .then((result) => {
                setClientSecret(result.clientSecret)
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://doc-house-server-one.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess();
                        toast.success('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        navigate('/');
                    }
                })
        }
    }
    // setProcessing(false);
    // }

    return (
        <div className='w-[500px]  bg-slate-200 p-10  rounded-xl lg:ml-60 ml-5 md:ml-40'>
            <form onSubmit={handleSubmit} className='mx-auto'>
                <CardElement className='bg-sky-700 p-5 rounded-xl'
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#281A17',
                                fontWeight: 'bold',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: '#F3E2DF',
                                fontWeight: 'bold',
                            },
                        },
                    }}
                />
                <div className='flex justify-center items-center mt-5'>
                    <button
                        className='btn mt-4 font-bold bg-green-700 text-white w-32 '
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div className='mt-9 text-center'>
                    <p>Your transactionId: <span className='font-bold'>
                        {transactionId}
                    </span></p>
                </div>
            }
        </div>
    );
};


export default CheckoutForm;