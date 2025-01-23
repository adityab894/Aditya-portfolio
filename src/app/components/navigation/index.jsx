"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {

  const angleincrement = 360 / BtnList.length;
  
  
  
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group '>
      {
        BtnList.map((btn, index) => {
        
          const angleRad = (index*angleincrement*Math.PI) / 180;
          const radius = 'calc(20vw - 1rem)';
          const x = `calc(${radius} *${Math.cos(angleRad)})`;
          const y = `calc(${radius} *${Math.sin(angleRad)})`;

          console.log(index, angleRad, radius, x, y);

          return <NavButton key={btn.label} x={x} y={y} {...btn} /> 
          
          {/* <button key={index}  className = 'absolute' style={{
            transform: `translate(${x}, ${y})`,
          }}>{btn.label}</button> */}
        })       
      }
    </div>
    </div>
  )
}

export default Navigation