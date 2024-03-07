import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Navbar from './Components/Navabar/Navbar';
import './App.css';

const Layout =()=>{
  return (
    <div className='md:w-10/12 mx-auto'>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Signup />
      },
      {
        path: '/post',
        element: <Home />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
