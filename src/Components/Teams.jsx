/* eslint-disable no-unused-vars */
import React from 'react';
import Footerb from './Footerb';
import { teamdata } from './data/Teamdata';

const Teams = () => {
  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className='flex justify-center items-center py-10'>
        <h1 className='text-5xl  font-vsoc text-red-600 pb-10'>Meet the Teams!!</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center py-4 px-10'>
        {teamdata.map((member, index) => (
          <div
            key={index}
            className='bg-gradient-to-r from-red-200 to-red-400 p-4 rounded-lg duration-300 transform hover:scale-105 mb-10 shadow-lg hover:shadow-xl transition-shadow'
          >
            <div className='flex justify-center items-center'>
              <img
                className='rounded-full h-full w-40 object-cover border-1 border-red-400 duration-300 hover:scale-110 transition-transform'
                src={member.Imageurl || "/baloon.jpg"}
                alt={member.Name}
              />
            </div>
            <div className='flex flex-col items-center justify-center pt-4 pb-4'>
              <p className='font-semibold text-xl text-gray-800'>{member.Name}</p>
              <p className='text-gray-700'>{member["Your Role"]}</p>
            </div>
            <div className='flex items-center justify-center space-x-4 pb-4'>
              <a
                className='w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow transform hover:scale-110'
                target='_blank'
                href={member["Github ID"]}
              >
                <img className='w-6 h-6' src="/github-sign.png" alt="GitHub" />
              </a>
              <a
                className='w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow transform hover:scale-110'
                target='_blank'
                href={member["LinkedIn ID"]}
              >
                <img className='w-6 h-6' src="/linkedin (1).png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footerb />
    </div>
  );
};

export default Teams;
