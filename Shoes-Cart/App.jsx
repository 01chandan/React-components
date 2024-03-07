import { useState } from 'react'
import Cardwithbutton from './components/Cardwithbutton'

function App() {
  const dataBase = [
    {productName: 'Nike Shoes Forse', price: '$145.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', order: false},
    {productName: 'Bata Air Forse', price: '$155.00', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', order: false},
    {productName: 'Reebok Shoes Forse', price: '$165.00', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', order: false},
    {productName: 'Addidas Premium', price: '$185.00', image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', order: false},
  ]

  const [data, setData] = useState(dataBase);

  const changeState = (changingIndex)=>{
    setData((prev)=>(
      prev.map((cards, index)=>{
        if(index === changingIndex) return {...cards, order: !cards.order}
        return cards;
      })
    ))
  }

  return (
    <div className='flex flex-wrap gap-16 bg-zinc-200 w-full h-screen justify-center items-center'>
      
      {data.map((cardItem, index)=>(
        <Cardwithbutton order = {cardItem.order} changeState ={changeState} index = {index} cardItem ={cardItem} key={index} />
      ))}
      
    </div>
  )
}

export default App
