import React, { useState,useRef } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';
import cake from '../assets/Cake.jpg'
import cakeVideo from '../assets/Bday.mp4'
export default function Happy() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const fixedEmail = 'munnimanoj1973@gmail.com';
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_email: fixedEmail,
      to_email: email,
      message: message,
      from_name: name
    };
    emailjs
      .send('service_aqhcmn9', 'template_5we3t0h',templateParams,'Oz62vwoCEaEO0EstU')
      .then(
        (response) => {
          alert("Greeting sent successfully to Aashish Kumar Singh!");
          console.log('SUCCESS!',response);
          setEmail('');
          setMessage('');
          setName('');
          var xhttp=new XMLHttpRequest;
          xhttp.open('POST','/incrementNewGreeting',true);
          xhttp.send();          
        },
        
      );
     
  };
  return (
<>
<div className="flex items-center justify-center font-semibold select-none ">
    <h1 className="text-3xl text-center text-rose-500 p-4">
      {/* Say Happy Birthday to <br /> */}
      Wish 
      <span className="text-4xl font-bold text-green-600"> Aadarsh</span><br />
     <span className='text-red-500'>on his </span> <span className='font-bold text-green-600 '>14 </span><sup className='text-blue-400'>th</sup> <span className=' text-purple-700'>Birthday</span><br />
    </h1>
  </div>

<div className="flex items-center sm:justify-between h-screen w-full mb-0 flex-col sm:flex-row ">
    
  <div className='m-7 p-5 place-content-center item-center justify-self-center w-4/6 sm:w-2/6 animate-bounce ease-linear skew-x-6 shadow-2xl shadow-rose-600 rounded-full z-40'>
   <video autoPlay loop muted className='rounded-full shadow-lg h-full w-full'>
  <source src={cakeVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
  </div>
  <form onSubmit={handleSubmit} ref={form} className="bg-rose-400 shadow-rose-300 shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-4/6 mr-7 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 cursor-pointer">
    <div className='mb-4'> 
        <h2 className='block text-rose-700 text-2xl font-bold mb-3 text-center '>Birthday Greeting Card</h2>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder='Please Write your Name Here'
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-2/6"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
       {name ? name : ''} G-mail Account
      </label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder='Enter your G-Mail Account'
        onChange={(e) => setEmail(e.target.value)}
        required
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-5/6"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Message">
      Greeting's From {name ? name : ''}
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        placeholder='Write your Message Here...'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
      ></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </div>
  </form>
</div>
</>    
  );
}
