import React from 'react'
import img11 from '../assets/images/motionarteffect-img11.png'
import img10 from '../assets/images/motionarteffect-img10.png'

const Selectionpage = () => {
  return (
    <div className='w-full h-full bg-[#0D051F] flex flex-col items-center text-white'>

      <div className='w-fit text-white lg:text-[2.5rem] text-center text-[1.5rem] mt-20 '>Apply On Any Section Or Enable For Whole Page</div>

      <div className='w-10/12 flex lg:flex-row flex-col mx-auto mt-20 gap-8 '>
        <div className='p-3 bg-[#3f335b] rounded-3xl flex flex-col gap-4 h-full'>
          <p className='text-[1.7rem]'>Apply On Section</p>
          <p className='text-[1.1rem]'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
          <img src={img10} alt="10" />
        </div>

        <div className='mt-20 p-3 bg-[#3f335b] rounded-3xl flex flex-col gap-4 h-full'>
          <p className='text-[1.7rem]'>Apply On Page</p>
          <p className='text-[1.1rem]'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          <img src={img11} alt="11" />
        </div>
      </div>
    </div>
  )
}

export default Selectionpage