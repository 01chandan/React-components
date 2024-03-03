import React, { useState } from 'react'

function UseState() {

  let [amount, setAmount] = useState(120)
  return (
    <div className='p-4'>
      <p className='font-bold mb-2'>
        {amount}
      </p>
      <button onClick={()=> setAmount((prev)=>prev+1)} className='bg-blue-500 py-1 px-2 rounded-full text-sm text-white'>
        Change
      </button>
    </div>
  )
}

export default UseState