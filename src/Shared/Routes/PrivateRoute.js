import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <span className="loading loading-infinity loading-lg mx-auto"></span>
    }
    if(user && user?.uid){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};
export default PrivateRoute;