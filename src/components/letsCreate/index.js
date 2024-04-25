import React from 'react'
import { rightArrow } from '@/assets'

const index = () => {
  return (
    <div className='bg-primary   mt-8 overflow-hidden'>
      <div className='flex justify-between place-items-end py-14 w-11/12 mx-auto h-[250px]'>
        <div className=''>
            <h1 className='font-Roboto font-semibold'>MINDFUL CREATIVITY. TECH INFUSED ARTISTRY.</h1>
            <p className='text-lg font-Roboto leading-23.4 mt-1 w-8/12'>We’re a multi-disciplinary studio that combines timeless design principles with the power of technology.</p>
        </div>
        <div className='flex gap-4 items-center'> 
        <p className='font-InstrumentSerif text-2xl underline underline-offset-4 '>LET’S CREATE</p>
        <div >
        <img src={rightArrow.src} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default index
