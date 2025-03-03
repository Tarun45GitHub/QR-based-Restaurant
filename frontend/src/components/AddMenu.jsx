import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'


function AddMenu() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
       const fromData= new FormData();
       fromData.append('menuImage',data.menuImage[0]);
       fromData.append('name',data.name);
       fromData.append('description',data.description);
       fromData.append('price',data.price);

       
        axios.post('/api/menu/create',fromData)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/from-data'>
            <input {...register("name")} type="text" name="name" id="" />
            <br />
            <input {...register("description")} type="text" name="description" id="" />
            <br />
            <input {...register("menuImage")} type="file" name="menuImage" id="" />
            <br />
            <input {...register('price')} type="number" name="price" id="" />
            <br />
            <input type="submit" value="submit" />
        </form>
       
    </div>
  )
}

export default AddMenu