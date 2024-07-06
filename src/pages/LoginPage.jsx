import React from "react";
import Navbar from "../components/Navbar";


import Footer from "../components/Footer";
import Login from "../components/Login";


const LoginPage = () => {
  return (
    <div id="" className="bg-transparent w-full overflow-hidden">
      <div id="">
        <div className="flex px-6 sm:px-16 justify-center items-center bg-transparent text-white">
          <div className="w-full xl:max-w-[1280px]">
            <Navbar className="" />
          </div>
        </div>

        {/* hero section */}

        <div>
          <Login />
        </div>
      </div>
      
      
    </div>
  );
};

export default LoginPage;
