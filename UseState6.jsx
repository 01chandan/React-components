// Some Task only 
import React, { useState } from 'react'

function UseState6() {

  const [value,setValue] = useState(false)
  return (
    <div>
        {/* Print Bahar Jao if value is false and print mt jao if value is true */}
        <h1>{value == true ? 'Bahar mt jao' : 'Bahar jao bhai'}</h1>
        <button onClick={()=>setValue((value)=> !value)}
        className='py-1 px-2 bg-blue-500 rounded-full text-white text-xs'>Click Here</button>
    </div>
  )
}

export default UseState6    