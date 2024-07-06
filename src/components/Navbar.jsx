import React, { useState } from 'react';
import { navLinks } from '../constants';
import { X, AlignLeft } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between bg-transparent items-center navbar py-6">
      <div className="flex-row justify-between items-center flex">
        <Link to="/">
          <h1 className="font-semibold text-purple-500 sm:text-[30px] text-[10px] font-poppins cursor-pointer">NollyBee</h1>
        </Link>
      </div>

      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li key={index}>
            <Link 
              to={`${nav.id}`} 
              className={`${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${nav.id === '/login' ? 'bg-purple-500 my-2 p-1 px-5 rounded-2xl items-center text-slate-100' : 'text-blue-500'} text-white hover:text-slate-300 font-poppins font-normal cursor-pointer text-[16px]`}>
              {nav.title}
            </Link>
          </li>
        ))}
        
      </ul>

      <div className="md:hidden justify-end items-center flex">
        <div onClick={() => setToggle(prev => !prev)} className="cursor-pointer">
          {toggle ? <X color='purple' size={30} /> : <AlignLeft color='purple' size={30} />}
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white z-[3] shadow-lg mt-10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none items-center flex flex-col justify-center flex-1 w-full">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-blue-500 mr-10`}
              >
                <Link 
                  to={`${nav.id}`} 
                  className={`${nav.id === '/login' ? 'bg-purple-500 my-2 p-1 rounded-md items-center text-white' : 'text-blue-500'} text-center hover:text-slate-300 font-poppins font-normal cursor-pointer text-[16px]`}>
                  {nav.title}
                </Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
