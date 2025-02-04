  "use client"
  import { BtnList } from '@/app/data'
  import React from 'react'
  import NavButton from './NavButton';
  import useScreenSize from '../hooks/useScreenSize';
  import ResponsiveComponent from '../ResponsiveComponent';

  const Navigation = () => {

    const angleincrement = 360 / BtnList.length;
    const size = useScreenSize ();
    const isLarge = size >= 1024;
    const isMedium = size >= 768;
    
    
    
    return (
      <div className="w-full fixed h-screen flex items-center justify-center">
        <ResponsiveComponent> 
        {({size}) => {
          return size && size >= 480 ?
          <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group '>
          {
          BtnList.map((btn, index) => {
          
            const angleRad = (index*angleincrement*Math.PI) / 180;
            const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
            const x = `calc(${radius} *${Math.cos(angleRad)})`;
            const y = `calc(${radius} *${Math.sin(angleRad)})`;

            console.log(index, angleRad, radius, x, y);

            return <NavButton key={btn.label} x={x} y={y} {...btn} /> 
          })       
          }
          </div>




          : (
            <> 
            <div className='w-full px-2.5 xs:p-0 xs:w-max space-y-4 flex flex-col items-start xs:items-center justify-center relative group '>
          {
          BtnList.slice(0,BtnList.length/2).map((btn, index) => {
            return <NavButton key={btn.label} x={0} y={0} {...btn} /> 
          })       
          }
          </div>
          <div className='w-full px-2.5 xs:p-0 xs:w-max space-y-4 flex flex-col items-end xs:items-center justify-center relative group  '>
          {
          BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {

            return <NavButton key={btn.label} x={0} y={0} {...btn}  labelDiretion="left"/> 
          })       
          }
          </div>      
            </>
            
          );
        
        }
        }
        </ResponsiveComponent>
      </div>
    )
  }

  export default Navigation