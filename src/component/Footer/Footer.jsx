import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              <span>mamdouhmagdy@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <span>+201228161195</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Cairo</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-xl">
              <FaTiktok />
            </a>
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} SEM. All rights reserved.
        </div>
      </div>
       </footer>
  )
}