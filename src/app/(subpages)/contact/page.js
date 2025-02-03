"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import React from 'react'


export default function Contact() {
  return (
    <>
      <Image
        src={bg} alt="background image" 
        className="-z -50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8"> 
        <div className="flex flec-col items-center justify-center space-y-6 w-3/4">
          <h1>
          summon the wizard
          </h1>

        </div>
      </article>
    </>
  );
}