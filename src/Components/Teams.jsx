import React from 'react'
import Footerb from './Footerb'

const Teams = () => {
 
  return (
    <div className=''>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-vsoc text-red-400 pb-20'>Meet the Teams!!</h1>
      </div>
       <div className='shadow-md bg-red-200 w-56  rounded-md duration-200 hover:scale-105 mb-20'>

        <div className='flex justify-center items-center'>
        <img className='rounded-md duration-200 h-36 bg-cover hover:scale-105' src="/baloon.jpg" alt="" />

        </div>
         <div className='flex items-center '>
     
   
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="#"><img src="/github-sign.png" alt="" /></a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='blank' href="#"><img src="/linkedin (1).png" alt="" /></a>
              </li>
            </ul>
        </button>
    </div>

</div>
<div>
  <Footerb/>
</div>

    </div>
  )
}

export default Teams
