import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Pages/Main/Main';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {

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