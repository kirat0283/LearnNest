import React from 'react'
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';
const Hiro = () => {
  return (
    
      <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto '>Your journey to mastery begins here. Access flexible courses and <span className='text-blue-600'> achieve your dreams.</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Explore a vast library of interactive courses designed by industry experts, covering everything from cutting-edge tech to creative arts. Learn at your own pace, on any device, and gain practical skills.</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Explore a vast library of interactive courses designed by industry experts, covering everything from cutting-edge tech to creative arts.</p>
      <SearchBar/>
    </div>

  )
}

export default Hiro


