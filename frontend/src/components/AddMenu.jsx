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
            // console.log(res.data);
            
           alert(res.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    
  return (
    <div class=" h-screen w-screen bg-slate-800 flex justify-center items-center text-white ">
        <div class='border-8  border-indigo-600 ... m-5 p-10'>
            <h3 class="text-center font-bold">Menu Form</h3>
        <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/from-data' class="flex-row justify-center items-center ">
            <input {...register("name")} type="text" name="name" id="" 
             class="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400
              rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50
               hover:border-slate-300 shadow-sm focus:shadow m-2" placeholder="Type here Menu Name..."/>
            <br />
            <input {...register("description")} type="textarea" name="description" id="" 
            class="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400
            rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50
             hover:border-slate-300 shadow-sm focus:shadow m-2" placeholder="Type here Menu description..." />
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>

            <input {...register("menuImage")} class="block w-full text-m  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 m-2 " aria-describedby="file_input_help" id="file_input" type="file"/>


            
            <input {...register('price')} type="number" name="price" id="" 
            class=" m-2 block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Menu Price" required />
            
           <div class="flex justify-center py-2 my-2">
           <input type="submit" value="submit"
             class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-m px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center" />
           </div>
            
        </form>
       </div>
    </div>
  )
}

export default AddMenu