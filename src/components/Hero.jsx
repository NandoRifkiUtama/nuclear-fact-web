import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-white max-w-[1250px] p-5 mx-auto'>
      <div className='flex justify-center items-center w-full h-screen mt-[-100px]'>
        <div className='flex flex-col'>
          <p className='text-4xl md:text-5xl lg:text-6xl mb-3 text-center text-gray-400'>Nuclear Energy</p>
          <p className='text-2xl md:text-3xl mb-3 text-center'>For a Better Future</p>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <p>A</p>
            <Typed className='text-md' strings={[
              'Renewable','Clean','Zero Emission'
            ]}
            typeSpeed={40} 
            backSpeed={50}
            loop
            />
            <p>Energy</p>
          </div>
          <div className='mt-3 flex justify-center'>
            <button className='bg-yellow-400 text-black py-3 px-8 rounded-lg hover:bg-white hover:scale-105 duration-200'>Get Started</button>
          </div>
        </div>
      </div>   
    </div>
  )
}
