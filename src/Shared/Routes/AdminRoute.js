import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loader || adminLoading ){
        return <p className='text-4xl font-bold text-center mb-20 mt-20'><span className="loading loading-infinity loading-lg"></span></p>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};
export default AdminRoute;