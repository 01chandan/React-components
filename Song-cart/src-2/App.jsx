import { useState } from 'react'
import SongCart from './components/SongCart'
import NavBar from './components/NavBar'

function App() {
  const dataBase = [
    {songName: "Moti Chen ", artistName: "DC & Sukki", video: "https://media.tenor.com/UShIbJFy5icAAAAi/looping-infinite-loop.gif", favourite: false},
    {songName: "Kaley Sheeshe", artistName: "Addy Nagar", video: "https://media1.tenor.com/m/E-W77aMrJqsAAAAC/guitar-sing.gif", favourite: false},
    {songName: "Jale 2", artistName: "Aman & Sapna", video: "https://media1.tenor.com/m/tW7W0qaUehQAAAAC/peach-cat-guitar.gif", favourite: false},
    {songName: "Palang Sagwan", artistName: "Pawan Singh", video: "https://media1.tenor.com/m/DBYlrTmxk34AAAAC/dance-leaf.gif", favourite: false},
    {songName: "Loli Pop", artistName: "Shivani", video: "https://media1.tenor.com/m/vW6-Vnyvu3kAAAAC/budding-pop-sing.gif", favourite: false},
  ]

  const [data, setData] = useState(dataBase);

  // Added song function
  const handleClick = (changeIndex)=>{
    setData((prev)=>(
      prev.map((value, index)=>{
        
      if (index === changeIndex) return {...value, favourite: !value.favourite};
      return value;
      
      })
    ))
  }


  return (
    <div className='px-32 py-10 bg-zinc-200 w-full h-screen'>
      
      <NavBar data = {data}/>
      <div className='flex gap-9 flex-wrap'>
        {data.map((obj, index)=>(
          <SongCart  key={index} cartData = {obj} index={index} handleClick ={handleClick}/> 
        ))}
      </div>
      
    </div>
  )
}

export default App


// import { useState } from 'react'
// import SongCart from './components/SongCart'
// import NavBar from './components/NavBar'

// function App() {
//   const dataBase = [
//     {songName: "Moti Chen ", artistName: "DC & Sukki", video: "https://media.tenor.com/UShIbJFy5icAAAAi/looping-infinite-loop.gif", favourite: false},
//     {songName: "Kaley Sheeshe", artistName: "Addy Nagar", video: "https://media1.tenor.com/m/E-W77aMrJqsAAAAC/guitar-sing.gif", favourite: false},
//     {songName: "Jale 2", artistName: "Aman & Sapna", video: "https://media1.tenor.com/m/tW7W0qaUehQAAAAC/peach-cat-guitar.gif", favourite: false},
//     {songName: "Palang Sagwan", artistName: "Pawan Singh", video: "https://media1.tenor.com/m/DBYlrTmxk34AAAAC/dance-leaf.gif", favourite: false},
//     {songName: "Loli Pop", artistName: "Shivani", video: "https://media1.tenor.com/m/vW6-Vnyvu3kAAAAC/budding-pop-sing.gif", favourite: false},
//   ]

//   const [data, setData] = useState(dataBase);
  
//   return (
//     <div className='px-32 py-10 bg-zinc-200 w-full h-screen'>
      
//       <NavBar />
//       <div className='flex gap-9 flex-wrap'>
//         {data.map((obj, index)=>(
//           <SongCart  key={index} cartData = {obj}/> 
//         ))}
//       </div>
      
//     </div>
//   )
// }

// export default App
