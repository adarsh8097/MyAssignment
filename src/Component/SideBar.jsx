import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BiTask } from "react-icons/bi";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { TbAnalyze } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Footer from './Footer';

const Sidebar = ({ isCollapsed, toggleCollapse }) => {
    function handledata(){
      alert('Coming soon');
    }
  return (
    <div className={`bg-white border-r ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 `}>
      
     

      <button onClick={toggleCollapse} className="p-4 text-red-400 ">
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>
      {!isCollapsed && <div className="p-4 font-semibold">
     
      <div className='flex justify-between text-gray-400 uppercase'>
       <h1>Dashboards</h1>
        <p className='mx-2 text-blue-800 cursor-pointer' onClick={handledata}><CiMenuFries/></p>
       </div>
       
      
         <div className='flex justify-between border text-1xl cursor-pointer bg-gray-300 my-3' onClick={handledata}>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><BiTask/></p>
         <p>Tasks</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>4</p>
         </div>
          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><MdDriveFolderUpload/></p>
         <p>Drive File</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>435</p>
         </div>
          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><MdOutlineDashboardCustomize/></p>
         <p>Boards</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>5</p>
         </div>

          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><MdOutlineUpdate/></p>
         <p>Update</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         {/* <p className='mx-2 text-blue-800'></p> */}
         </div>
         
          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><TbAnalyze/></p>
         <p>Analytics</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>2</p>
         </div>

          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><MdSpaceDashboard/></p>
         <p>CRM Dashboard</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>2</p>
         </div>

          </div>
          <div className='flex justify-between sens-serif text-1xl  my-3'>
         <div className='flex gap-2'>
         <p className='text-2xl text-blue-800'><IoMdSettings/></p>
         <p>Setting</p>
         </div>
         <div className='border rounded-lg bg-blue-200'>
         <p className='mx-2 text-blue-800'>2</p>
         </div>

          </div>
          <br></br>
          <br></br>
          <Footer/>
      </div>}
     
    </div>
  );
};

export default Sidebar;
