import React from 'react'
import { rightArrow } from '@/assets'

const index = () => {
  return (
    <div className='bg-transparent overflow-hidden  '>
      <div className=' relative z-50 mt-4'></div>
      <div className='  lg:flex gap-8 items-end justify-between    md:py-14 py-36  w-11/12 mx-auto h-350 text-white'>
        <div className='md:mt-16 lg:mt-0'>
          <h1 className='font-Roboto font-semibold w-75p  md:w-full mb-2 relative z-50'>MINDFUL CREATIVITY. TECH INFUSED ARTISTRY.</h1>
          <p className='md:text-lg text-sm font-InstrumentSerif leading-23.4 mt-1 md:w-68p mb-8 relative z-50'>We’re a multi-disciplinary studio that combines timeless design principles with the power of technology.</p>
        </div>
        <div className='flex gap-4 items-center '>
          <div className='lg:mb-8'>
            <p className='font-InstrumentSerif md:text-2xl text-sm  underline underline-offset-4 text-nowrap relative z-50 '>LET’S CREATE</p>
          </div>
          <div className='w-20 lg:mb-8'>
            <img className='relative z-50' src={rightArrow.src} alt="" />
          </div>
        </div>
      </div>
      <div className=' relative z-50 mt-4'></div>
    </div>

  )
}

export default index
