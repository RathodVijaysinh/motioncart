import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-16 text-white flex justify-between bg-gradient-to-bl from-orange-600 to-blue-800 '>

      <div className='w-10/12 mx-auto flex md:flex-row flex-col md:justify-between items-center '>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className='flex gap-3 '>
          <p>Documentation</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  )
}

export default Footer