import React, { useState } from 'react'

function UseState2() {

    const [value, setvalue] = useState({
        name: "chandan",
        desc: false,
    })
  return (
    <div className='p-4'>
        <h1>{value.name}</h1>
        <h1>{value.desc.toString()}</h1>
        <button onClick={()=> setvalue({...value, desc: !value.desc})} 
        className= {`py-1 px-1 ${value.desc ? 'bg-blue-500' : 'bg-red-500'} rounded-md text-white text-sm`}>Change</button>
    </div>
  )
}

export default UseState2