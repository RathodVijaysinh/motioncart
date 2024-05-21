import React from 'react'
import motionvaliimage from "../assets/images/MotionArtEffect-logo.png"

const Homepage = () => {
  return (
   <div className='w-10/12 mx-auto text-white mt-8 '>

       <div className='flex justify-between w-full'>
        <div className='lg:w-fit w-[50%]'>
            <img src={motionvaliimage} alt="motionlogo"  />
        </div>
        <div className=''> 
            <button className='lg:py-4 lg:px-6 py-1 px-2 text-black bg-white rounded-md cursor-pointer lg:text-[1rem] text-[10px]'>Purchase Now</button>
        </div>
       </div>

       <div className='mt-24 p-2 lg:flex '>

        <div className='lg:w-[20%] w-full'>
         <div className='lg:pr-20'>
          <p className='text-[1.2rem] bg-gradient-to-r from-orange-600 via-blue-800 to-indigo-800 ... inline-block ... text-transparent ... bg-clip-text'>Transform Your  Website</p>
          <p className='text-[1.2rem]'>With Motion Art Effect</p>
         </div>
        </div>

        <div className='lg:w-[80%] w-full flex lg:ml-20 lg:mt-0 mt-8'>
          <div className='flex flex-col items-start font-bold lg:w-[60%] gap-5'>
            <p className='lg:text-[3.5rem] text-[2rem] color-[#EEE5FF]'>Attract Your Visitors Attention With Colorful<span className='bg-gradient-to-r from-orange-600 via-blue-800 to-indigo-800 ... inline-block ... text-transparent ... bg-clip-text'> Motion Art Effect</span></p>
             <p className='font-semibold'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
          </div>
        </div>

       </div>
   </div>
  )
}

export default Homepage