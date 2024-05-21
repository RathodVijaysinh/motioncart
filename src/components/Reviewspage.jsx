import React from 'react'
import fectimsge1 from "../assets/images/motionarteffect-img1.png"
import fectimage2 from "../assets/images/motionarteffect-img2.png"
import fectimage3 from '../assets/images/motionarteffect-img3.png'
import starimage from '../assets/images/motionarteffect-img4.png'
import fectimg5 from "../assets/images/motionarteffect-img5.png"
import { GoArrowRight } from "react-icons/go";

const Reviewspage = () => {
  return (

    <div className='w-full h-full bg-[#0D051F] '>
      <div className='w-10/12 mx-auto text-white pt-20 '>

        <div className='mx-auto w-fit text-[1.2rem]'>Trusted by thousands of users around the world</div>

        <div className='flex justify-between mt-20 flex-wrap gap-6'>

          <div className='flex items-center justify-center gap-3'>
            <img src={fectimsge1} alt="img1" />
            <div className='flex flex-col justify-center gap-3'>
              <img src={starimage} alt="sar1" />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className='flex items-center justify-center gap-3'>
            <img src={fectimage2} alt="img1" />
            <div className='flex flex-col justify-center gap-3'>
              <img src={starimage} alt="sar1" />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className='flex items-center justify-center gap-3'>
            <img src={fectimage3} alt="img1" />
            <div className='flex flex-col justify-center gap-3'>
              <img src={starimage} alt="sar1" />
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>

        </div>

        <div className='w-full flex lg:flex-row flex-col gap-20 mt-32'>

          <div className='lg:w-[60%] flex flex-col items-start gap-8'>
            <p className='lg:text-[2.8rem] text-[1.8rem]' >Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            <p className='text-[1.2rem]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <div className='py-4 px-8 rounded-2xl  w-fit bg-gradient-to-bl from-orange-600 to-blue-700'>
            <button className='flex items-center gap-2' >
              Purchase From Envato <span><GoArrowRight /></span>
            </button>
            </div>
          </div>

          <div className='lg:w-[40%] flex justify-start lg:justify-end'>
            <img src={fectimg5} alt="img1" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Reviewspage