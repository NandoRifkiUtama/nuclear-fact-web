import React from 'react'

const Reactor = () => {
  return (
    <div className='bg-white px-8 py-12 mx-auto grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl border border-gray-600 shadow-lg hover:scale-105 duration-300 cursor-pointer'>
                <div>
                    <img className='w-full h-[200px] md:h-[240px] object-cover rounded-t-xl' src="https://i.pinimg.com/originals/24/2a/10/242a10cfeda9f7898a152dfab4f4b8f0.gif" alt="/" />
                </div>   
                <div className='p-4 border-t border-black'>
                    <p className='font-bold mb-2 bg-yellow-400 w-[200px] p-2 rounded-full'>Pressurized Water Reactor</p>
                    <p className='text-sm text-gray-600 font-bold'>A common nuclear power reactor design in which very pure water is heated to a very high temperature by fission, kept under high pressure (to prevent it from boiling), and converted to steam by a steam generator (rather than by boiling, as in a boiling-water reactor)</p>
                </div>
            </div>
            <div className='rounded-xl border border-gray-600 shadow-lg hover:scale-105 duration-300 cursor-pointer'>
                <div>
                    <img className='w-full h-[200px] md:h-[240px] object-cover rounded-t-xl' src="https://www.southernnuclear.com/news-center/education/water-200428/_jcr_content/content/responsivegrid/columnctr/colOne/columnctr_2037827453/colOne/articlecontentfragme/par0/articleimage.coreimg.gif/1612190092362/water-200428-img21.gif" alt="/" />
                </div>   
                <div className='p-4 border-t border-black'>
                    <p className='font-bold mb-2 bg-yellow-400 w-[170px] p-2 rounded-full'>Boiling Water Reactor</p>
                    <p className='text-sm text-gray-600 font-bold'> It is the second most common type of electricity-generating nuclear reactor after the pressurized water reactor (PWR), which is also a type of light water nuclear reactor.</p>
                </div>
            </div>
            <div className='rounded-xl border border-gray-600 shadow-lg hover:scale-105 duration-300 cursor-pointer'>
                <div>
                    <img className='w-full h-[200px] md:h-[240px] object-cover rounded-t-xl' src="https://thumbs.gfycat.com/CheapDeficientBrocketdeer-size_restricted.gif" alt="/" />
                </div>   
                <div className='p-4 border-t border-black'>
                    <p className='font-bold mb-2 bg-yellow-400 w-[200px] p-2 rounded-full'>Fussion Reactor</p>
                    <p className='text-sm text-gray-600 font-bold'>Fusion power is a proposed form of power generation that would generate electricity by using heat from nuclear fusion reactions. In a fusion process, two lighter atomic nuclei combine to form a heavier nucleus, while releasing energy.</p>
                </div>
            </div>
    </div>
  )
}

export default Reactor