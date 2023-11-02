import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import photo from '../../assets/errorPhoto/errorPage.jpg';

const ErrorPage = () => {

    const { logOut } = useContext(AuthContext);

    const error = useRouteError();

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className='w-96 h-full mx-auto mt-9 mb-10'>
                <img src={photo} alt="" className='rounded-xl' />
            </div>
            <div className='text-center'>
                {/* <p className='text-red-500'>Something went wrong!!!</p> */}
                <p className='text-red-700 font-bold'>{error.statusText || error.message}</p>
                <h4 className="text-3xl mt-8"> Please <button onClick={handleLogOut} className='btn btn-accent'>Sign out</button> and log back in</h4>
            </div>
        </div>
    );
};

export default ErrorPage;