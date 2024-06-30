/* eslint-disable no-unused-vars */
import React from 'react';
import Footerb from './Footerb';
import { teamdata } from './data/Teamdata';

const Teams = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-vsoc text-red-400 pb-20'>Meet the Teams!!</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-10 text-center py-4 sm:py-8 px-12 sm:px-0 mt-5 ml-4'>
        {teamdata.map((member, index) => (
          <div key={index} className='shadow-md bg-red-200 w-56 rounded-md duration-200 hover:scale-105 mb-20'>
            <div className='flex justify-center items-center'>
              <img
                className='rounded-md duration-200 h-36 bg-cover hover:scale-105'
                src={member.Imageurl || "/baloon.jpg"}
                alt={member.Name}
              />
            </div>
            <div className='flex flex-col items-center justify-center pt-2'>
              <p className='font-semibold'>{member.Name}</p>
              <p className=''>{member["Your Role"]}</p>
            </div>
            <div className='flex items-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                <ul>
                  <li>
                    <a target='_blank' href={member["Github ID"]}>
                      <img src="/github-sign.png" alt="GitHub" />
                    </a>
                  </li>
                </ul>
              </button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                <ul>
                  <li>
                    <a target='_blank' href={member["LinkedIn ID"]}>
                      <img src="/linkedin (1).png" alt="LinkedIn" />
                    </a>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footerb />
      </div>
    </div>
  );
};

export default Teams;
