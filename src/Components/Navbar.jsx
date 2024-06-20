import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className='bg-red-200 px-4 sm:px-10 py-2'>
      <div className='flex justify-between items-center'>
        <div>
          <ul>
            <li>
              <a href="https://www.vsoc.tech/"><img className='h-10' src='/logobg.png' alt='Logo' /></a>
            </li>
          </ul>
          
        </div>
       
        <ul className='flex'>
          <li className=''>
            <Link to='/LeaderboardN' className='px-2 sm:px-4 py-2 hover:text-red-600 ' >
              Leaderboard
            </Link>
          </li>
          <li className=''>
            <Link to='/Teams' className=' px-2 sm:px-4 py-2 hover:text-red-600 ' >
              Teams
            </Link>
          </li>
          <li className=''>
            <Link to='/Projects' className=' px-2 sm:px-4 py-2 hover:text-red-600' >
              Projects
            </Link>
          </li>
          <li className=''>
            <Link to='/Faqs' className=' px-2 pr-1 sm:pr-0 sm:px-4  py-2 hover:text-red-600' >
              Faqs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
