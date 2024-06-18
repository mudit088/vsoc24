import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { animated } from 'react-spring';
import './Front.css';
import About from './About';
import Timeline from './Timeline';
import { Outlet } from 'react-router-dom';

import Footerb from './Footerb';
import Navbar from './Navbar';
import Partners from './Partaners';
import ScrollReveal from 'scrollreveal';

const Front = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      distance: '80px',
      duration: 1500,
      delay: 100
    });
    sr.reveal('.toporigin', { origin: 'top' });
    sr.reveal('.bottomorigin', { origin: 'bottom' });
    sr.reveal('.leftorigin', { origin: 'left' });
    sr.reveal('.rightorigin', { origin: 'right' });
  },[])


  return (
    <>
      
      <div className="h-full w-full bg-cover bg-gradient-to-b from-red-200 to-blue-100 min-h-screen flex flex-col items-center justify-center">
        <Parallax pages={2}>
          {/* First Parallax Layer */}
          <ParallaxLayer offset={0} speed={0.5}>
            <animated.div className="h-full flex flex-col items-center justify-center text-center">
          
            </animated.div>
          </ParallaxLayer>

          {/* Sticky Layer */}
          <ParallaxLayer sticky={{ start: 0.4, end: 1.5 }}>
                 <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg text-orange-400 mt-36 font-vsoc'>Dept. of Computer Science and Design Presents..</p>
                  
                   <h1 className="text-4xl md:text-5xl lg:text-7xl font-vsoc text-orange-400  animate-slidein1200 opacity-0">Vinyasa Summer of Code</h1>
                 
                 </div>
         

            <div className="flex flex-col justify-center items-center mt-10">
              {/* <img src="/baloon1bg.png" className="hidden sm:block sm:h-48 m-5" alt="Balloon" /> */}
              <div className="apply-button mt-10" data-hackathon-slug="vinyasa-summer-of-code-vsoc" data-button-theme="light" style={{ height: 44, width: 312 }}></div>
            </div>
          </ParallaxLayer>

          {/* Second Parallax Layer */}
          <ParallaxLayer offset={1} speed={0.5}>
            <animated.div className="h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-200 mt-10 ">Join Us This Summer</h2>
              {/* <p className="text-xl text-yellow-200 mt-4">Learn, Code, Innovate.</p> */}
              {/* <img className='h-56 rounded-xl' src="/codingbg.png" alt="" /> */}
            </animated.div>

          </ParallaxLayer>

          {/* Background Images with Parallax */}
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: -1 }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
              <div className='flex mt-12'>
              <img src="/logo dsi.png" className="h-10 pr-2" alt="DSI Logo" />
              <p className="text-xl font-semibold text-gray-700 mt-2 text-center">Dayananda Sagar Academy of Technology and Management</p>
              </div>
              
              <img src="/uppersun2s.png" alt="Upper Sun" className="w-full h-full object-cover mt-4" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.3} style={{ zIndex: -1 }}>
            <img src="/downsun.png" alt="Lower Sun" className="w-full h-full object-cover" />
          </ParallaxLayer>
        </Parallax>
      </div>
      <div>
        <About />
        <Timeline />
        <Partners/>
        
        <Footerb />
      </div>
    </>
  );
};

export default Front;
