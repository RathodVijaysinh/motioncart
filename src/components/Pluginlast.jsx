import React from 'react'
import img6 from "../assets/images/motionarteffect-img6.png"
import img7 from "../assets/images/motionarteffect-img7.png"
import img9 from "../assets/images/motionarteffect-img9.png"
const Pluginlast = () => {
  return (
    <div className='w-full h-full text-white'>
      <div className='w-10/12 mx-auto mb-16'>
          
          <div className='lg:w-[45%] mx-auto gap-4'>
            <p className='text-[2rem] text-center lg:px-12'>An All-Round Plugin With Powerful Features</p>
             <p className='text-[1rem] text-center lg:px-2 mt-6'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
          </div>

          <div className='flex lg:flex-row flex-col gap-8 mt-16 justify-around'>

            <div className='p-4 bg-[#3f335b] rounded-2xl lg:w-[33%] '>
              <img src={img9} alt="img6." />
              <p className='text-[2rem]'>Light Weight</p>
              <p className='text-[1rem]'>Motion Art for Elementor is designed to be lightweight.</p>
            </div>

            <div className='p-4  bg-[#3f335b] rounded-2xl lg:w-[33%]'>
                <img src={img6} alt="img7." />
                <p className='text-[2rem]'>100% Responsive</p>
                <p className='text-[1rem]'>Create a consistent visual experience across all devices.</p>
            </div>

            <div className='p-4  bg-[#3f335b] rounded-2xl lg:w-[33%] '>
              <img src={img7} alt="img9." />
              <p className='text-[2rem]'>User Friendly Interface</p>
              <p className='text-[1rem] pr-10'>Ensure a smooth experience for both applicants and administrators.</p>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Pluginlast