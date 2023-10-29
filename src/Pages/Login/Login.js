import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLogin = data => {
        console.log(data);

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="w-96 p-7"><h2 className="text-4xl text-center mb-10 font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            required: 'Password is required.!'
                        })}
                    />
                    {errors.password && <p className='text-red-700 font-bold'>{errors.password?.message}</p>}

                    <Link><p className="text-sm">Forgot Password?</p></Link>



                    <input className='btn btn-warning font-bold w-full mt-7' type="submit" />
                    <p>New to Doctor's House? <Link className='text-orange-700 font-semibold' to='/signup'>Create new account</Link> </p>
                    <br /> <br /><br />
                    <input className='btn btn-warning btn-outline font-bold w-full mt-7' type="submit" value='continue with google' />
                </form>
            </div>
        </div>
    );
};

export default Login;