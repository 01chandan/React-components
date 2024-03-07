import React from 'react'

function Cardsize({shoesSize}) {
  return (
      <div className='h-8 w-10 border border-slate-300 rounded-md mt-2 mb-4 text-xs flex justify-center items-center cursor-pointer'>
        {shoesSize}
      </div>   
  )
}

export default Cardsize