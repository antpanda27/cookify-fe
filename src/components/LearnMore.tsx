import Image from 'next/image'
import React from 'react'

const LearnMore = () => {
  return (
    <div className='grid grid-cols-1 gap-11 lg:grid-cols-[40%_auto] relative mt-[143px] items-center'>
      <div>
        <h1>Everyone can be a chef in their own kitchen</h1>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...</p>
        <button className='bg-black text-white px-6 py-3 rounded-full mt-18'>Learn More</button>
      </div>
        <div className='relative w-full h-[597px] max-lg:hidden'><Image src="/assets/learnmore.png" alt="learn more" className='object-contain' fill/></div>
    </div>
  )
}

export default LearnMore
