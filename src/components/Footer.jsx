import React, { useEffect, useRef } from 'react';
const MyFooter = () => (
  <>
  <div className="bg-gray-800 text-white w-full text-xl p-4 shadow-2xl  shadow-slate-600">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex-1 text-center md:text-left">
        <span className="align-text-bottom text-lg">
         <span className='font-bold text-2xl text-gray-400 '> Connect with me on </span> <a href="https://www.linkedin.com/in/aashish-kumar-singh-7110b02a9/" className="text-blue-500 hover:text-blue-400 hover:underline text-2xl" target='_blank'>LinkedIn</a>
        </span>
      </div>
      <div className="flex-1 text-center md:text-right">
        <span className="align-text-bottom text-lg">
        <span className='font-bold text-2xl text-gray-400'> Created with </span><span className="text-red-500 font-bold text-2xl">Love</span>  <span className='font-bold text-2xl text-gray-400'> by </span> <span className='font-bold text-2xl text-amber-500'>Aashish</span> 
        </span>
      </div>
    </div>    
    <div className="text-center sm md:text-center md:text-xl  mt-4 md:mt-0">
      <h2>
       <span className=' text-yellow-500'>Congratulations</span> <span className=' text-rose-500 text-2xl font-bold'>Aadarsh </span>  <span className='font-bold text-2xl text-gray-400'> on turning </span> <span className='text-green-500 font-bold text-2xl'>14</span>  <span className='font-bold text-2xl text-gray-400'>!</span>
      </h2>
    </div>
  </div>
  </>
);
export default MyFooter;
