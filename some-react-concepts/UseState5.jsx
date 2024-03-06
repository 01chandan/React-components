import React, { useState } from 'react'

function UseState5() {
    const [data, setData] = useState([
        {name: 'chandan', age: 22},
        {name: 'Bhuvan Bam', age: 25},
        {name: 'Ajay Nagar', age: 32},
    ])
  return (
    <div className='p-5'>
        {data.map((value)=>(
        <div>
            <h1>{value.name}</h1>
            <h1>{value.age}</h1>
        </div>
        ))}
      <button onClick={()=>setData(()=>
        data.map((item)=> item.name === 'Bhuvan Bam' ? ({name: 'Karan', age: 28}) : item
      ))}
        className='py-1 px-2 bg-blue-500 rounded-full text-white text-xs'>Click Here</button>
    </div>
  )
}

export default UseState5