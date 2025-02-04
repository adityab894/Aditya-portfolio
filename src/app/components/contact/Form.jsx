"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input type="text" placeholder="name" {...register("name", {required: true})}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
       />
      <input type="email" placeholder="email" {...register("email", {required: true})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <input type="number" placeholder="mobilenumber" {...register("mobilenumber", {required: true})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <textarea {...register("message", {required:true, maxLength: 250, minLength: 40})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />

      <input type="submit" />
    </form>
  );  
}
