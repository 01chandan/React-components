import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function Card3() {
  const [value, setValue] = useState(true);
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
        <div className='relative w-80 h-52 bg-zinc-500 rounded-md overflow-hidden flex'>
          <img className= {`shrink-0 transition duration-500 w-full h-full object-cover ${value === true ? "-translate-x-[100%]" : "-translate-x-[0%]"}`}
          src="https://images.unsplash.com/photo-1709290608385-e6b029804f9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          
          <img className= {`shrink-0 transition duration-500 w-full h-full object-cover ${value === true ? "-translate-x-[100%]" : "-translate-x-[0%]"}`}
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          
          <span onClick={()=> setValue(()=> !value)}
          className='absolute bottom-7 left-1/2 -translate-x-[50%] w-10 h-10 bg-[#dadada7b] rounded-full flex justify-center items-center cursor-pointer'>
            {value === true ? <FaArrowLeft size= "0.9em"/> : <FaArrowRight size= "0.9em"/> }
          </span>
        </div>
    </div>
  )
}

export default Card3    