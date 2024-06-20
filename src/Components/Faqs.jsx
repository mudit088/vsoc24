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
    setShow((prevShow) => ({ ...prevShow, [id]: !prevShow[id] }));
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center p-4 lg:p-0">
        <div className="p-4 text-center lg:text-left">
          <p className="text-red-300 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">
            FREQUENTLY ASKED
            <br />
            <span className="text-orange-300 pt-2"> QUESTIONS </span>
          </p>
          <div className="mt-4 lg:mt-10">
            {/* <button className='bg-gradient-to-r from-teal-400 to-blue-800 rounded w-full lg:w-96 h-16 justify-center border-2 hover:border-black text-white font-semibold'>DROP YOUR QUESTIONS</button> */}
          </div>
        </div>
        <div className="flex justify-center p-4 lg:p-0">
          <img
            src="https://f.hellowork.com/blogdumoderateur/2022/04/mettre-en-place-faq.jpg"
            className="h-48 sm:h-64 md:h-80 lg:h-96"
            alt="FAQ illustration"
          />
        </div>
      </div>
      <section className="mx-4 sm:mx-12 md:mx-24 lg:mx-64 mb-24">
        <div className="justify-center align-center items-center">
          {data.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex text-lg sm:text-xl lg:text-2xl border-2 rounded-3xl bg-gradient-to-r from-red-200 to-blue-500 shadow-black w-full justify-between items-center p-4 cursor-pointer" onClick={() => toggleShow(item.id)} aria-controls={`faq-${item.id}`} aria-expanded={show[item.id]}>
                <p>{item.ques}</p>
                <p className="text-xl">{show[item.id] ? '➖' : '➕'}</p>
              </div>
              {show[item.id] && (
                <div id={`faq-${item.id}`} className="bg-gradient-to-r from-red-200 to-blue-500 rounded-3xl mt-2 p-4">
                  <p className="text-base sm:text-lg lg:text-xl">{item.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faqs;
