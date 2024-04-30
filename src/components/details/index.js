import React from 'react'
import { details } from '@/constant'

const Index = () => {
  return (
    <div>
        <div className='bg-white  border-b border-black py-6'>
            <div className='w-11/12 mx-auto p-[30px]'>
                <h1 className='text-primary text-15 font-InstrumentSerif'>Details</h1>
                <p className='text-primary lg:w-1/2 font-Roboto py-4 md:text-2xl text-[22px]'>As a creative director looking to experiment, better myself and add beauty to the world, I have started using technologies available to me to enhance my creative ability and intelligence. This is not solely ai generated, the ai tools were used to help enhance creative concepts that I wanted to develop further.</p>
            </div>
            <div className='md:flex justify-between md:w-11/12 mx-auto gap-4 p-8'>
                {
                    details?.map((elem, i) => (
                        <div key={i} className='bg-detailsdiv p-8 mb-4'> 
                            <h1 className='text-primary text-32  font-Roboto font-semibold'>{elem.title}</h1>
                            <p className='text-textcolor text-lg md:mt-24 mt-8 py-4 leading-21.09 font-Roboto'>{elem.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Index
