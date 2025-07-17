import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className={`${styles.hero} flex flex-col justify-center items-center min-h-[70vh] px-4`}>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Welcome to <span className="text-green-400">SEMX Group</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl text-center mb-6">
          At SEMX Group, we engineer smart solutions that drive growth, streamline operations, and redefine the future of business.
        </p>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl text-center">
          With a passionate team and a deep commitment to innovation, we deliver cutting-edge systems like our powerful SEM platform, giving manufacturers full control, real-time insights, and unmatched efficiency across their production lines.
        </p>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl text-center mt-4">
          Whether you’re scaling your operations or launching a new venture, SEMX Group is your trusted technology partner.
        </p>
      </div>
    </section>
  )
}