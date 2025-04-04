import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 px-4 sm:px-10 bg-[#F5F5F5]'>
      <div className="container mx-auto flex flex-col gap-6">
        {/* Logo and Navigation - Stack on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <h3
            className="font-normal leading-none tracking-normal text-2xl sm:text-3xl text-[#484848]"
            style={{ fontFamily: "Volkhov" }}
          >
            <Link href="/">FASCO</Link>
          </h3>
          
          {/* Navigation */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:space-x-5 lg:space-x-10 text-sm sm:text-base">
              <li className="px-3 py-2 sm:p-0">
                <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              </li>
              <li className="px-3 py-2 sm:p-0">
                <Link href="/" className="hover:text-gray-600 transition-colors">Shop</Link>
              </li>
              <li className="px-3 py-2 sm:p-0">
                <Link href="/" className="hover:text-gray-600 transition-colors">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-gray-200">
          <p className='text-center text-xs sm:text-sm text-gray-600'>
            Copyright © {new Date().getFullYear()} FASCO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer