import React from 'react'
import img8 from '../assets/images/motionarteffect-img8.png'

const Browsepage = () => {
  return (
    <div className='w-full h-screen bg-[#0D051F] flex items-center  text-white'>
      <div className='w-10/12 rounded-2xl mx-auto bg-[#3f3b49] h-fit flex flex-col items-center justify-center gap-8 p-8'>
        <p className='text-[1.1rem]'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        <p className='text-[1.5rem]'>Supported by All Popular Browsers</p>
        <img src={img8} alt="imgf" />
      </div>
    </div>
  )
}

export default Browsepage