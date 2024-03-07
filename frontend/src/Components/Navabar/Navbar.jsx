import React from 'react'
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation().pathname;
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        <img
          src="/logo.jpeg"
          alt="Hyrr Logo"
          width={"40px"}
          className="ml-8"
        />
      </div>
    

    <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
         <h2 className='font-bold text-2xl'>
        { location.includes("signin") ? (
              ""
            ) :  location.includes("signup") ? (
              ""
            ) : (
              "HOME"
            )}
          </h2>
    </div>
    </div>
    </div>
    
  
  );
};

export default Navbar;