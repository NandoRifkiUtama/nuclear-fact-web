import React from 'react'

const Notify = () => {
  return (
    <div className='text-white py-12 px-4 flex flex-col justify-center items-center mx-auto'>
        <div className='max-w-[1250px] mx-auto'>
            <div className='flex flex-col justify-center items-center p-4'>
                    <p className='text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold mb-4'>Want to know more about nuclear?</p>
                    <p className='text-xl mb-4'>Sign Up to our newsletter and get the knowladge</p>
                    <div className='flex flex-col justify-center items-center'>
                        <input className='px-4 py-2 mb-4 rounded-full w-[300px] md:w-[400px]  text-gray-700' type="text" placeholder='Your Email' />
                        <button className='bg-yellow-400 py-2 w-[100px] rounded-xl font-bold text-black hover:bg-white hover:scale-105 duration-300'>Notify Me</button>
                    </div>
            </div>
        </div>     
    </div>
  )
}

export default Notify