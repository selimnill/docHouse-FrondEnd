import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Pages/Main/Main';
import Home from '../../Pages/Home/Home';
import About from '../../Components/About/About';

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