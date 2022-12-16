import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Price = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center px-4 py-12 mx-auto p'>
        <div className=' max-w-[1250px]  grid md:grid-cols-3 gap-6'>
        <div className='shadow-xl border rounded-xl px-8 py-6 flex flex-col justify-center items-center hover:scale-105 duration-300 bg-gray-100'>
            <PersonIcon className='mb-4 md:mb-6 ' sx={{fontSize: 70}}/>
            <p className='text-xl  mb-2 md:mb-3 lg:md-4'>Single User</p>
            <p className='text-3xl md:text-4xl lg:text-5xl mb-6 mt-4'>$30</p>
            <p className='text-md md:text-xl text-gray-500 mb-4'>One email capacity</p>
            <div className='bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-300 cursor-pointer '>
                <button className='font-bold text-sm'>Start Trial</button>
            </div>
        </div>
        <div className='shadow-xl border rounded-xl px-8 py-6 flex flex-col justify-center items-center hover:scale-105 duration-300 bg-gray-100'>
            <GroupIcon className='mb-4 md:mb-6 ' sx={{fontSize: 70}}/>
            <p className='text-xl mb-2 md:mb-3 lg:md-4'>Group Account</p>
            <p className='text-3xl md:text-4xl lg:text-5xl mb-6 mt-4'>$100</p>
            <p className='text-md md:text-xl text-gray-500 mb-4'>4 emails capacity</p>
            <div className='bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-300 cursor-pointer '>
                <button className='font-bold text-sm'>Buy Now</button>
            </div>
        </div>
        <div className='shadow-xl border rounded-xl px-8 py-6 flex flex-col justify-center items-center hover:scale-105 duration-300 bg-gray-100'>
            <AutoAwesomeIcon className='mb-4 md:mb-6 ' sx={{fontSize: 70}}/>
            <p className='text-xl mb-2 md:mb-3 lg:md-4'>Infinity Account</p>
            <p className='text-3xl md:text-4xl lg:text-5xl mb-6 mt-4'>$200</p>
            <p className='text-md md:text-xl text-gray-500 mb-4'>Unlimited emails capacity</p>
            <div className='bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-300 cursor-pointer '>
                <button className='font-bold text-sm'>Buy Now</button>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Price