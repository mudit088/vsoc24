import React, { useState, useEffect } from 'react';

const Faqs = ({ Quest }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState({});

  useEffect(() => {
    if (Array.isArray(Quest)) {
      setData(Quest);
      const initialShowState = {};
      Quest.forEach((item) => {
        initialShowState[item.id] = false;
      });
      setShow(initialShowState);
    }
  }, [Quest]);

  const toggleShow = (id) => {
    setShow({ ...show, [id]: !show[id] });
  };

  return (
    <>
        

    <div className=" flex flex-col  lg:flex-row ml- justify-center items-center">
        <div className='p-4'>
        <p className=' text-red-300 text-5xl font-bold font-sans '>
            FREQUENTLY ASKED <br /> <p className='text-orange-300 pt-2'> QUESTIONS </p>
        </p>
        <div className='ml- mt-10'> 
        {/* <button className='bg-gradient-to-r from-teal-400 to-blue-800 rounded w-96 h-16 justify-center border-2 hover:border-black text-white font-semibold'>DROP YOUR QUESTIONS</button> */}
        </div>
       </div>
        <div>        
          
            <img src="https://f.hellowork.com/blogdumoderateur/2022/04/mettre-en-place-faq.jpg" className='h-96  ' alt="" /> 
        </div>
        
        
        </div>
        <section className="ml-0 mr-0 sm:ml-64 sm:mr-24 sm:mb-24">
  <div className="justify-center align-center items-center">
    {data.map((item) => (
      <div key={item.id}>
        <div className=''>
          <div className="inline flex text-2xl border-2 rounded-3xl  bg-gradient-to-r from-red-200 to-blue-500 shadow-black">
            <p className="p-4">{item.ques}</p>
            <p className="pt-4 cursor-pointer float-right" onClick={() => toggleShow(item.id)}>
              {show[item.id] ? '➖' : '➕'}
            </p>
          </div>
          <div className='bg-gradient-to-r from-red-200 to-blue-500 rounded-3xl duration-300'>
            {show[item.id] && <p className="text-xl p-4 duration-300">{item.ans}</p>}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      
      
        </>
  );
}

export default Faqs;
