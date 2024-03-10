// Handling Form in Websites using useRef

import React, { useRef } from 'react'

function Formhandling() {

    const name = useRef(null);
    const age = useRef(null);

    const handleForm = (event)=> {
       event.preventDefault();
       console.log(name.current.value,age.current.value);
    }

  return (
    <div className=''>
        <form action="" onSubmit={handleForm}>
            <input ref={name} type="text" placeholder='Enter Name' className='border-2'/>
            <input ref={age} type="text" placeholder='age' className='border-2'/>
            <input type="submit" />
        </form> 
         
    </div>
  )
}

export default Formhandling