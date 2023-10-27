import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Shared/Routes/Routes';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
      
    </div>
  );
}

export default App;
