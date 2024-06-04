import React, { useState,useRef } from 'react';
import '../App.css'; 
import emailjs from '@emailjs/browser';
export default function Contact() {
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
          console.log('SUCCESS!',response);
          setEmail('');
          setMessage('');
          setName('');
          alert("Message sent successfully to Aashish Kumar Singh!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error while sending your message!\nPlease try again!");
        },
      );
  };
  return (
    <div className="flex justify-center items-center h-screen w-full mb-0">
      <form onSubmit={handleSubmit} ref={form} className="bg-green-400 shadow-rose-300 shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-10/12 bg-gradient-to-r from-indigo-400 to-rose-400">
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
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-2/6"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fixedEmail">
            Aashish Kumar Singh's G-Mail
          </label>
          <input
            type="text"
            id="fixedEmail"
            value={fixedEmail}
            readOnly
            className="shadow appearance-none border rounded py-2 px-3 w-full sm:w-4/6 text-gray-700 leading-tight bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            {name ? name : 'Your'}'s G-Mail Account
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-5/6"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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
  );
}
