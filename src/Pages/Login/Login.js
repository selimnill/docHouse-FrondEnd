import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfully.');

                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            });


    }



    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(err => console.log(err));
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
                    {
                        loginError && <p className='text-red-600 font-semibold'>{loginError}</p>
                    }
                    <input className='btn btn-warning font-bold w-full mt-7' type="submit" />
                    <p>New to Doctor's House? <Link className='text-orange-700 font-semibold' to='/signup'>Create new account</Link> </p>
                    <br /> <br /><br />
                    <input onClick={handleGoogleSignIn} className='btn btn-warning btn-outline font-bold w-full mt-7' type="submit" value='continue with google' />
                </form>
            </div>
        </div>
    );
};

export default Login;