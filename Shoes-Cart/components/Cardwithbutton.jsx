import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cardsize from './Cardsize';
function Cardwithbutton({cardItem, order, index, changeState}) {

  const shoesSize = [40.5, 41, 42, 43, 44];

  return (
    <div className='w-60 bg-white rounded-lg p-2'>
        <div className='w-full h-40'>
            <img className='w-full h-full object-cover rounded-lg' src={`${cardItem.image}`} alt="" />
        </div>
        <div className='flex items-center justify-between'>
            <h1 className='mt-3 font-semibold'>{cardItem.productName}</h1>
            <h1 className='mt-3 font-semibold'>{cardItem.price}</h1>
        </div>
        <p className='text-xs mt-2 text-gray-600 font-semibold'>Select Size</p>
        
        {/* Card Size Component */}
        <div className= {`flex gap-2`}>
            {shoesSize.map((sizeItem, index)=>(
            <Cardsize key={index} shoesSize = {sizeItem}/>
            ))}
        </div>   
        
        {/* Button Implementation */}
        <button onClick={()=>{changeState(index)}} 
        
        className= {`w-full py-1 px-2 ${order ? 'bg-zinc-300 text-black font-semibold' : 'bg-black'} text-white text-sm mt-2 rounded-md flex items-center justify-center gap-2 mb-2`}>
            {/* Icon */}
            <AiOutlineShoppingCart size={"1.3em"}/>
            {order ? "Remove Cart" : "Add to Cart"}
        </button>
        
    </div>
  )
}

export default Cardwithbutton