import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function Navbar() {
    const [nav,setNav] = useState(false);
  return (
    <div className='  text-white max-w-[1250px] p-5 mx-auto border-b border-gray-800 '>
    {/* main nav */}
        <nav className='  flex justify-between items-center p-2'>
            <div>
                <p className='text-yellow-400 font-bold text-3xl cursor-pointer'>Nuclear Fact</p>
            </div>
            <div className='justify-between gap-8 items-center hidden md:flex '>
                <p className='text-sm cursor-pointer hover:text-yellow-400'>Home</p>
                <p className='text-sm cursor-pointer hover:text-yellow-400'>About</p>
                <p className='text-sm cursor-pointer hover:text-yellow-400'>Sign In</p>
                <div className='bg-white text-black rounded-xl hover:bg-yellow-400 cursor-pointer'>
                    <p className='text-sm px-4 py-2 '>Sign Up</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
            <p className='text-sm cursor-pointer hover:text-yellow-400 mr-5 md:hidden'>Sign In</p>
                <div className='bg-white text-black rounded-xl hover:bg-yellow-400 cursor-pointer mr-6 md:hidden'>
                        <p className='text-sm px-4 py-2 '>Sign Up</p>
                </div>
                <div>
                    <MenuIcon onClick={()=>setNav(!nav)} className=' cursor-pointer' />
                </div>
            </div>
            
        </nav>

        {/* overlay black */}
        {nav?<div className='w-full h-screen fixed top-0 left-0 bg-black/80 z-[100]'></div> : null}
        
        {/* side bar */}
        <div className={nav?'bg-black w-[60%] h-full fixed left-0 top-0 border-r border-gray-900 z-[100] duration-500 md:w-[30%]' : 'bg-black w-[60%] h-screen fixed left-[-100%] top-0 border-r border-gray-900 z-[100] duration-500'}>
            <HighlightOffRoundedIcon onClick={()=>setNav(!Navbar)} className='absolute top-4 right-4 hover:text-yellow-400 cursor-pointer hover:scale-105 duration-300'/>
            <div className='flex flex-col h-screen px-4 pt-8'>
                <h1 className='text-yellow-400 text-2xl mb-4'>Nuclear Fact</h1>
                <ul className='p-4'>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>Home</li>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>About</li>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>Fission</li>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>Fussion</li>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>Reactor</li>
                    <li className='border-b mb-2 p-2 hover:bg-yellow-400 duration-300 hover:text-black cursor-pointer'>Help</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar