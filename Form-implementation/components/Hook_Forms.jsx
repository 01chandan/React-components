import React from 'react'
import {useForm} from 'react-hook-form'
function Hook_Forms() {

    const {register, handleSubmit} = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
            <input {...register("name")} placeholder='Enter Name' className='border-2'/>
            <input {...register("age")} placeholder='age' className='border-2'/>
            <input type="submit" />
        </form> 
    </div>
  )
}

export default Hook_Forms