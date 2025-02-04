"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
      
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle: 5000,
        }
      }
  )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
      <input type="tel" placeholder="mobilenumber" {...register("mobilenumber", {required: true, max: 10, min: 10})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <textarea {...register("message", {required:true, maxLength: 250, minLength: 40})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />

      <input 
      value="Drop Your Message"
      className = 'px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </form>
  );  
}
