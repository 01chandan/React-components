// Console COmponent used to read values of data into a form field

import React, { useState } from 'react'

function Form_ControlComponent() {
  const [value, setValue] = useState({name: "", age:""});

  const submitForm = (event)=>{
    event.preventDefault();
    console.log(value.name);
    console.log(value.age);
  }

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <input onChange={(event)=>setValue({...value, name: event.target.value})} type="text" placeholder='name' />
        <input onChange={(event)=>setValue({...value, age: event.target.value})} type="number" placeholder='age' />
        <input type="submit" />
      </form>      
    </div>
  )
}

export default Form_ControlComponent