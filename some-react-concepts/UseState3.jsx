// Remove Element one by one in an Array
import React, { useState } from 'react'

function UseState3() {
    const [value, setValue]= useState([1,2,3,4,5,6]);
  return (
    <div className='p-4'>
        {value.map((val)=>(
            <h1 className='p-2 text-black'>{val}</h1>
        ))}

        {/* Reduce Number one by one using use state and filter */}
        <button onClick={
            ()=>setValue(()=>(
                value.filter((item, index)=> index != value.length-1)
            ))
        } 
        className='py-1 px-2 text-white text-xs bg-blue-500 rounded-full'>Click here</button> 
    </div>
  )
}

export default UseState3   