import React from 'react'

function NavBar({data}) {

  return (
    <div className=' w-full flex justify-between item-center'>
        <p className='font-semibold'>
            <span className='text-orange-600 text-lg font-semibold'>G</span>anna  
            <span className='text-orange-600 text-lg font-semibold'>B</span>ajana
        </p>
        <div className='flex gap-2 bg-orange-600 py-2 px-4 rounded-md text-sm text-white'>
            <p>Favourite</p>
            <p>{data.filter(value=>value.favourite).length}</p>
        </div>
    </div>
  )
}

export default NavBar




// import React from 'react'

// function NavBar() {
//   return (
//     <div className=' w-full flex justify-between item-center'>
//         <p className='font-semibold'>
//             <span className='text-orange-600 text-lg font-semibold'>G</span>anna  
//             <span className='text-orange-600 text-lg font-semibold'>B</span>ajana
//         </p>
//         <div className='flex gap-2 bg-orange-600 py-2 px-4 rounded-md text-sm text-white'>
//             <p>Favourite</p>
//             <p>2</p>
//         </div>
//     </div>
//   )
// }

// export default NavBar