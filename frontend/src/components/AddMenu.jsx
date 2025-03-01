import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

function AddMenu() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        console.log( data);
        axios.post('http://localhost:3000/api/menu/create',data)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} type="text" name="name" id="" />
            <br />
            <input {...register("description")} type="text" name="description" id="" />
            <br />
            <input type="submit" value="submit" />
        </form>
       
    </div>
  )
}

export default AddMenu