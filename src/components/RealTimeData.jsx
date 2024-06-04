import React, { useEffect, useState } from 'react';
import '../App.css'
export default function Realdata() {
    const [Number_Visitors,setNumberVisitors]=useState('');
    const [Unique_Visitors,setUniqueVisitors]=useState('');
    const [Visitors_Greeted,setVisitorsGreeted]=useState('');
    useEffect(() => {
        const fetchCounts = () => {
            // alert("data is : ");
          var xhttp = new XMLHttpRequest();
          xhttp.open('POST', '/realtime', true);
          xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
              var response = JSON.parse(this.responseText);
            //   alert("Response is : ",response)
              var data = response.data;
            //   alert(data);
              setNumberVisitors(data.Number_Visitors);
              setUniqueVisitors(data.Unique_Visitors);
              setVisitorsGreeted(data.Visitors_Greeted);
            } 
          };
          xhttp.send();
        };
      
        fetchCounts();
        const intervalId = setInterval(fetchCounts, 1000);
        return () => clearInterval(intervalId);
      }, []);
    return (
<>
<h2 className='flex-grow text-white font-semibold cursor-pointer text-2xl text-center justify-between'>Real Time Data</h2>
        <div className="flex flex-wrap justify-cente mb-3 ">
<div className="w-full align-middle sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-6 absoulte ">
  <div className="bg-white rounded-lg cursor-pointer hover:z-40 relative">
    <div className="p-10 flex flex-col justify-center items-cente h-1/2 shadow-2xl hover:shadow-rose-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">14</h2>
      <h3 className="text-2xl font-semibold text-center text-gray-800">Aadarsh's<br /> Age</h3>
    </div>
  </div>
</div>
<div className="w-full align-middle sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-6 absoulte">
  <div className="bg-white rounded-lg cursor-pointer hover:z-40 relative">
  <div className="p-10 flex flex-col justify-center items-cente h-1/2 shadow-2xl hover:shadow-rose-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{Number_Visitors}</h2>
      <h3 className="text-2xl font-semibold text-center text-gray-800">Total Number of<br />Visitors Viewed</h3>
    </div>
  </div>
</div>
<div className="w-full align-middle sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-6 absoulte">
  <div className="bg-white rounded-lg cursor-pointer hover:z-40 relative">
  <div className="p-10 flex flex-col justify-center items-cente h-1/2 shadow-2xl hover:shadow-rose-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{Unique_Visitors}</h2>
      <h3 className="text-2xl font-semibold text-center text-gray-800">Total Number of<br />Unique Visitors</h3>
    </div>
  </div>
</div>
<div className="w-full align-middle sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-6 absoulte">
  <div className="bg-white rounded-lg cursor-pointer hover:z-40 relative">
  <div className="p-10 flex flex-col justify-center items-cente h-1/2 shadow-2xl hover:shadow-rose-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{Visitors_Greeted}</h2>
      <h3 className="text-2xl font-semibold text-center text-gray-800">Total Number of Greetings</h3>
    </div>
  </div>
</div>
        </div>
        </>
    );
}
