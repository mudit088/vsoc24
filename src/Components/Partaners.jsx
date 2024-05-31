import React from 'react'

const Partners = () => {
  return (
    <div name='Partners' className='w-screen h-screen flex justify-center items-center bg-gradient-to-b from-yellow-100 to-orange-50'>
      <div className='flex flex-col items-center'>
        <h1 className="font-display text-orange-900 mb-8 text-center font-Vsoc text-3xl font-extrabold leading-none tracking-tight sm:mb-20 md:text-5xl lg:text-6xl">
          Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-36 text-center justify-center items-center py-8 px-12 sm:px-0 mb-14 sm:mt-5">
          <img src="/ETHIndia.png" alt="ETHIndia" className="h-12 sm:h-12 py-2 ml-4 sm:ml-0 sm:py-0" />
          <img src="/Devfolio - Dark.svg" alt="Devfolio" className="h-10 sm:h-12 py-2 sm:py-0 ml-6  sm:ml-0" />
          <img src="/GMC LogoS.png" alt="LogoS" className="h-14 sm:h-16 ml-16 py-2 sm:py-0" />
          <img src="/Polygon_Primary_Dark.svg" alt="Polygon" className="h-10 sm:h-14 py-2 sm:py-0 ml-6 sm:ml-0" />
          <img src="/incogni black (3).png" alt="Incogni" className="h-10 sm:h-12 py-2 sm:py-0 ml-6 sm:ml-0" />
          <img src="/nord.jpeg" alt="Nord" className="h-10 sm:h-12 py-2 sm:py-0 ml-6 sm:ml-0" />
          <img src="/nordv.jpeg" alt="NordV" className="h-10 sm:h-12 py-2 sm:py-0 ml-6 sm:ml-0" />
        </div>
      </div>
    </div>
  )
}

export default Partners
