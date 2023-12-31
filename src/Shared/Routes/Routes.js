import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Pages/Main/Main';
import Home from '../../Pages/Home/Home';
import About from '../../Components/About/About';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Reviews from '../../Components/Reviews/Reviews';
import Contact from '../../Components/Contact/Contact';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../../Pages/Main/DashboardLayout';
import Allusers from '../../Pages/Dashboard/Allusers';
import AdminRoute from './AdminRoute';
import AddDoctor from '../../Pages/Dashboard/AddDoctor';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors';
import Payment from '../../Pages/Dashboard/Payment';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import Location from '../../Components/Location/Location';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <Location></Location>
            },
            {
                path:'/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/reviews',
                element: <Reviews></Reviews>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },                       
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
        [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctors',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://doc-house-server-one.vercel.app/bookings/${params.id}`)
            },
        ]
    }
]);

// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';

// const Routes = () => {

//     const router = createBrowserRouter
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Routes;