import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-purple-100 md:px-36 text-left w-full mt-10 border-t border-gray-200'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10'>
        
        {/* Logo + Description */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo} alt="logo" className='w-32'/>
          <p className='mt-6 text-center md:text-left text-sm text-gray-700'>
            Unlock your potential and fuel your curiosity. We believe that continuous learning is the key to personal and professional growth.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-purple-700 mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-gray-700 md:space-y-2'>
            <li><a href="#" className='hover:text-purple-500 transition'>Home</a></li>
            <li><a href="#" className='hover:text-purple-500 transition'>About us</a></li>
            <li><a href="#" className='hover:text-purple-500 transition'>Contact us</a></li>
            <li><a href="#" className='hover:text-purple-500 transition'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-purple-700 mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-gray-700'>
            Get our latest updates, course recommendations, and exclusive offers delivered straight to your inbox.
          </p>
          <div className='flex items-center gap-2 pt-4'>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='border border-gray-300 bg-white text-gray-700 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'
            />
            <button className='bg-purple-600 hover:bg-purple-500 w-24 h-9 text-white rounded transition'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <p className='py-4 text-center text-xs md:text-sm text-gray-500 border-t border-gray-200'>
        Copyright 2025 © LearnNest. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
