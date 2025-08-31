import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-purple-50 border-t border-gray-200 w-full px-8 md:px-36 py-6">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img className="hidden md:block w-24" src={assets.logo} alt="logo" />
          <div className="hidden md:block h-7 w-px bg-gray-300"></div>
          <p className="text-center text-xs md:text-sm text-gray-600">
            Copyright 2025 © <span className="text-purple-700 font-medium">LearnNest</span>. All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/" className="hover:scale-110 transition">
            <img src={assets.facebook_icon} alt="facebook_icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <img src={assets.twitter_icon} alt="twitter_icon" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <img src={assets.instagram_icon} alt="instagram_icon" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
