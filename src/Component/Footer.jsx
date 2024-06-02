import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {
    function handledata(){
        alert('coming soon');
    }
  return (
    <footer className="bg-gray-300 text-black  fixed bottom-10 mx-0 gap-10 rounded" style={{width:"15%"}}>
    <div className="flex justify-evenly items-center">
      <p className='border text-2xl p-2 m-2 bg-blue-300 cursor-pointer' style={{gap:"10px",borderRadius:"50%"}} onClick={handledata}><FaUserAlt /></p>
      <p className="mx-3 font-bold " >Jon's Devo</p>
    </div>
  </footer>
  );
};

export default Footer;
