import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';



const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signUpError, setSignUPError] = useState('')
    const { signup, updateUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignup = data => {
        console.log(data);

        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                navigate(from, {replace: true});
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(userInfo);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});

            })
            .catch(err => console.log(err));
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="w-96 p-7"><h2 className="text-4xl text-center mb-10 font-bold">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <label className='font-semibold mx-3'>Name</label>
                    <input type="name" name='name' className="mt-2 input input-bordered input-accent w-full "
                        {...register('name', {
                            required: 'Name is required.!'
                        })}

                    />
                    {errors.name && <p className='text-red-700 font-bold'>{errors.name?.message}</p>}
                    <label className='font-semibold mx-3'>Email</label>
                    <input type="email" name='email' className="mt-2 input input-bordered input-accent w-full "
                        {...register('email', {
                            required: 'Email address is required.!'
                        })}

                    />
                    {errors.email && <p className='text-red-700 font-bold'>{errors.email?.message}</p>}

                    <label className='font-semibold mx-3'>Password</label>
                    <input type="password" name='password' className=" mt-2 input input-bordered input-accent w-full "
                        {...register('password', {
                            required: 'Password is required.!',
                            minLength: { value: 6, message: 'Password must be 6 character or more.!' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} />
                    {errors.password && <p className='text-red-700 font-bold'>{errors.password?.message}</p>}




                    <input className='btn btn-warning font-bold w-full mt-7' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <p>Already have an account? <Link className='text-orange-700 font-semibold' to='/login'>Please Login</Link> </p>
                    <br /> <br /><br />
                    <input onClick={handleGoogleSignIn} className='btn btn-warning btn-outline font-bold w-full mt-7' value='continue with google' />
                </form>
            </div>
        </div>
    );
};

export default Signup;