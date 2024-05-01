import { BlackArrow, CollabImg } from '@/assets'
import React from 'react'

const Collaborator = () => {
    return (
        <div className='bg-white py-12 border-b border-t border-black'>
            <div className='w-11/12 mx-auto md:p-8 '>
                <div className=' md:flex justify-between text-black'>
                    <div className='flex flex-col gap-2 '>
                        <div className='flex flex-col xl:gap-2'>
                            <p className='font-Roboto text-primary font-semibold'>AI Collaborative Campaign</p>
                            <p className='font-InstrumentSerif text-primary text-15'>Nike</p>
                        </div>
                        <div className=' xl:w-[100%] '>
                            <p className='xl:text-65 lg:text-[55px] md:text-[45px] text-[34px] text-primary  xl:leading-76 lg:leading-[60px] leading-42  font-Roboto font-semibold'>Enhancing creative concepts through AI</p>
                        </div>
                        <div className='flex items-center gap-4 py-8'>
                            <div className=''>
                                <p className='font-InstrumentSerif md:text-15 text-2xl  text-primary'>Project Details</p>
                            </div>
                            <div className='w-3 h-3  '>
                                <img src={BlackArrow.src} alt="Arrow" />

                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[92%]  '>
                        <img className='w-full h-full' src={CollabImg.src} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Collaborator
