import React from 'react'
import { rightArrow } from '@/assets'

const index = () => {
  return (
    <div className='bg-primary    overflow-hidden'>
      <div className='  md:flex gap-8 items-end justify-between   md:py-14 py-36  w-11/12 mx-auto h-[350px] md:h-[350ox]'>
        <div className=''>
          <h1 className='font-Roboto font-semibold w-[75%]  md:w-full mb-2'>MINDFUL CREATIVITY. TECH INFUSED ARTISTRY.</h1>
          <p className='md:text-lg text-sm font-InstrumentSerif leading-23.4 mt-1 md:w-[68%] mb-8'>We’re a multi-disciplinary studio that combines timeless design principles with the power of technology.</p>
        </div>
        <div className='flex gap-4 items-center '>
          <div>

            <p className='font-InstrumentSerif md:text-2xl text-sm  underline underline-offset-4 text-nowrap mb-10'>LET’S CREATE</p>
          </div>
          <div className='w-[20px] mb-8 ' >
            <img className='' src={rightArrow.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
