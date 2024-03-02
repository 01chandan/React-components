import React from 'react'

function Card() {

  const data =[
    {
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Amazon Prime",
      desc: "lorem Ipsum is Lorem Ipsum and Lore Lorem Ipsum"
    },
    {
      image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Amazon Basic",
      desc: "lorem Ipsum is Lorem Ipsum and Lore Lorem Ipsum"
    },
    {
      image: 'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Microsoft",
      desc: "lorem Ipsum is Lorem Ipsum and Lore Lorem Ipsum"
    },
  ]

  return (
      <div className='w-full h-screen flex justify-center items-center gap-10 '>
          {data.map((value, index)=> (
            <div key= {index} className='w-52 rounded-md overflow-hidden'>
            <div className='w-full h-32 object-cover'>
              <img className="w-full h-full"src={value.image} alt="" loading='lazy'/>
            </div>
            <div className='w-full bg-zinc-200'>
                <h1 className='text-lg p-2 font-bold'>{value.name}</h1>
                <p className='text-sm pl-2 pb-2'>{value.desc} 
                </p>
            </div>
          </div>
          ))}
      </div>
  )
}

export default Card