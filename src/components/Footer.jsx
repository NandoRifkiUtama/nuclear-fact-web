import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='text-white max-w-[1250px] py-12 px-4 grid gap-12 '>
        <div className='flex flex-col p-4'>
            <p className='text-center mb-8 md:mb-8'>Contact Us :</p>
            <div className='flex justify-between md:justify-center'>
                <InstagramIcon className='md:mx-2 hover:scale-150 cursor-pointer duration-300'/>
                <TwitterIcon className='md:mx-2 hover:scale-150 cursor-pointer duration-300'/>
                <FacebookIcon className='md:mx-2 hover:scale-150 cursor-pointer duration-300'/>
                <EmailIcon className='md:mx-2 hover:scale-150 cursor-pointer duration-300'/>
                <LocalPhoneIcon className='md:mx-2 hover:scale-150 cursor-pointer duration-300'/>
            </div>
        </div>
        <div className='flex flex-col items-center mt-[-30px] md:flex-row md:justify-center md:items-center'>
            <p className='md:mr-4 md:text-sm text-gray-500 hover:text-white'>Supports</p>
            <p className='md:mr-4 md:text-sm text-gray-500 hover:text-white'>Marketing</p>
            <p className='md:mr-4 md:text-sm text-gray-500 hover:text-white'>Commerce</p>
            <p className='md:mr-4 md:text-sm text-gray-500 hover:text-white'>Pricing</p>
            <p className='md:mr-4 md:text-sm text-gray-500 hover:text-white'>Insight</p>
        </div>
        <div>
            <p className='text-center text-xs text-yellow-400 p-2'>Created by Nando @2022</p>
        </div>
    </div>
  )
}

export default Footer