import React from 'react'

function SongCart({cartData, index, handleClick}) {
    const {songName, artistName, video, favourite} = cartData;
  return (
    <div className='w-52 bg-white p-2 mt-10 rounded-md pb-8 flex flex-wrap gap-3 relative'>
        <div className='h-20 w-20 rounded-md bg-pink-200'>
            <img className='h-full w-full object-cover rounded-md border-slate-200 border-2' src={`${video}`} />
        </div>
        <div className=''>
            <h1 className='font-semibold text-sm'>{songName}</h1>
            <p className='text-xs'>{artistName}</p>
            <p className='text-xs mt-6 text-gray-600'>Trending #1</p>
        </div>
        <button onClick={()=>(handleClick(index))} 
            className= {`px-2 py-1 ${favourite ? 'bg-teal-700' : 'bg-orange-500'} rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-xs text-white whitespace-nowrap`}>
            {favourite ? 'Added' : 'Add to Favourite'}
        </button>
    </div>
  )
}

export default SongCart





// import React from 'react'

// function SongCart({cartData}) {
//     const {songName, artistName, video, favourite} = cartData;
//   return (
//     <div className='w-52 bg-white p-2 mt-10 rounded-md pb-8 flex flex-wrap gap-3 relative'>
//         <div className='h-20 w-20 rounded-md bg-pink-200'>
//             <img className='h-full w-full object-cover rounded-md border-slate-200 border-2' src={`${video}`} />
//         </div>
//         <div className=''>
//             <h1 className='font-semibold text-sm'>{songName}</h1>
//             <p className='text-xs'>{artistName}</p>
//             <p className='text-xs mt-6 text-gray-600'>Trending #1</p>
//         </div>
//         <button className= {`px-2 py-1 ${favourite ? 'bg-teal-400' : 'bg-orange-500'} rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-xs text-white whitespace-nowrap`}>
//             {favourite ? 'Added' : 'Add to Favourite'}
//         </button>
//     </div>
//   )
// }

// export default SongCart