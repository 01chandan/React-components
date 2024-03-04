import React, { useState } from 'react'

function UseState4() {
  const [count, setCount] = useState([1,2,3,4,5,6]);
return (
  <div className='p-5'>
      {count.map((value, index)=>(
          <h1>{value}</h1>
      ))}
      <button onClick={()=>setCount(
        ()=>(count.filter((value)=> value%2 !== 0 )))}
      className='py-1 px-2 bg-blue-500 rounded-full text-white text-xs'>Click Here</button>
  </div>
)
}
export default UseState4



// // Addition in Array

// function UseState4() {
//   const [count, setCount] = useState([1,2,3,4,5,6]);
// return (
//   <div className='p-5'>
//       {count.map((value)=>(
//           <h1>{value}</h1>
//       ))}
//       <button onClick={()=> setCount(()=>[...count, 7])}
//       className='py-1 px-2 bg-blue-500 rounded-full text-white text-xs'>Click Here</button>
//   </div>
// )
// }

// export default UseState4