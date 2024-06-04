import React, { useEffect } from 'react';
import '../App.css';
import Bday from '../assets/HappyBdayAadarsh.mp4';
export default function Home() {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
  function getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  useEffect(() => {
    function checkCookie() {
      let user = getCookie('username');
      if (user !== '') {
        const xhttp1 = new XMLHttpRequest();
        xhttp1.open('POST', '/incrementTotalUser', true);
        xhttp1.send();
      } 
      else {
          setCookie('username','Happy Birthday', 365);
          const xhttp = new XMLHttpRequest();
          xhttp.open('POST', '/incrementUniqueOne', true);
          xhttp.send();
      }
    }
    checkCookie();
  }, []);
  return (
<div className="flex flex-wrap w-full p-5 sm:p-7 flex-col md:flex-row mt-0">
  <div className="flex-1 md:p-4">
    <h1 className="text-4xl font-bold mb-4 p-6 m-5 text-yellow-500">
      Happy Birthday<br /> <span className="text-indigo-600 cursor-pointer transition hover:text-green-600 block animate-bounce pt-7 ">Aadarsh!</span>
    </h1>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex-1 md:mr-4">
        <h3 className="text-4xl p-6 m-5 text-amber-600">
          <span className='font-bold text-green-600'>14</span> Years of <span className='font-bold text-green-600'>Growth</span><br /> <span className='font-bold text-green-600'>and </span> the <span className='font-bold text-green-600'>Best </span>is Yet to <span className='font-bold text-green-600'>Come!</span>
        </h3>
        <h2 className=' font-semibold justify-items-center w-full p-6 m-5 text-xl text-pretty text-slate-300'>
          Meet <span className='font-bold text-sky-400'>Aadarsh</span>, a friendly and charming boy who has been on an incredible journey of growth and learning. Born on <span className='text-sky-400 font-bold'>June 4, 2010</span>, Aadarsh began his academic journey at <span className='text-green-500 font-bold'>Cambridge International School FarrukhNagar Haryana</span>, where he excelled up to the fifth standard. His thirst for knowledge led him to appear for the <span className='text-green-400 font-bold'>Jawahar Navodaya exam</span> in the fifth grade, a milestone he <span className='text-indigo-500 font-bold'>cleared</span> with <span className='font-bold text-sky-500'>flying colors</span>. Currently he is in the <span className='font-bold text-orange-600'>eighth</span> standard at Jawahar Navodaya Vidyalaya Gurugram, Aadarsh continues to showcase his dedication and <span className='font-bold text-blue-600'>passion for education</span>. He shares a <span className='font-bold text-yellow-300'>special bond</span> with his brother, whom he cares for deeply. As he turns <span className='font-bold text-sky-600'>14</span>, Aadarsh stands at the threshold of new adventures and opportunities, <span className='font-bold text-green-500'>ready</span> to embrace the journey ahead with<span className='font-bold text-green-700'> enthusiasm and optimism</span>.
        </h2>
      </div>
      <video autoPlay loop muted className="w-full md:w-2/6 animate-pulse rounded-xl shadow-xl shadow-cyan-500/50 mb-4 md:mb-0 skew-x-6 origin-center">
        <source src={Bday} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>
  );
}