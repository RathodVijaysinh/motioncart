import React from 'react'
import navbarimagr from "../assets/images/motionarteffect-img2.png"

const Navabar = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-3 bg-[#262626]'>
            <div className='flex items-center'>
                <img src={navbarimagr} alt="navabar image" width={30} height={30} /> 
                <span className='text-white text-[20px]'>envato</span>
                <span className='text-green-600 text-[20px]'>market</span>
            </div>
            <div className='md:mr-5 mr-0'>
                <button className='px-2 py-1 bg-green-700 rounded-md text-white'>
                    Buy now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navabar