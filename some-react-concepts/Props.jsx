// we use Props Drilling using creating cards and fetch data using props

//Props drilling and Handling events in button add friend option 

import React from 'react'

function Props({name,designation, image, index, handleClick, btnIndex}) {
  return (
    <div className='w-48 bg-white rounded-md p-2'>
        <img className='w-full h-52 rounded-md object-cover' src= {`${image}`} />
        <h1 className='font-semibold mt-2'>{name}</h1>
        <p className='text-xs'>{`Designation: ${designation}`}</p>
        <button onClick={()=> {handleClick(index)}}
        className= {`py-1 px-2 bg-blue-500 text-white rounded-md text-xs mt-3 mb-1`}>{btnIndex ? 'Friends' : 'Add Friend'}</button>
    </div>
  )
}

export default Props


// //Button Task Only
// import React from 'react'

// function Props({btnName,btnColor}) {
//   return (
//     <div className='p-5'>
//         <button className= {`py-1 px-2 ${btnColor} text-white rounded-md`}>{btnName}</button>
//     </div>
//   )
// }

// export default Props