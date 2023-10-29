import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Pages/Main/Main';
import Home from '../../Pages/Home/Home';
import About from '../../Components/About/About';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Reviews from '../../Components/Reviews/Reviews';
import Contact from '../../Components/Contact/Contact';
import Login from '../../Pages/Login/Login';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
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
            }
            
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