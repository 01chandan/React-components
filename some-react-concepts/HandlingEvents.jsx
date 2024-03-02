import React from 'react'

function HandlingEvents() {

    const data = [
        {
            songName: 'Yeh javani hai diwani',
            desc: 'This is a very important song that has a lot of information about the artis',
        },
        {
            songName: 'Lag ja Gale',
            desc: 'This is a very important song that has a lot of information about the artist',
        }
    ]
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
        {data.map((value, index)=>(
            <div className='w-96 bg-zinc-300 rounded p-3'>
                <h1 className='font-bold mb-2'>{value.songName}</h1>
                <p className='text-sm mb-2'>{value.desc}</p>
                {/* Handling Events on Button using onClick or onMouseOver Event*/}
                <button onClick={()=> alert("Downloaded")} className='text-sm bg-blue-400 px-2 py-1 rounded-md'>Download Now</button>
            </div>
        ))}
    </div>
  )
}

export default HandlingEvents