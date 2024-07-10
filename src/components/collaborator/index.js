import { BlackArrow, CollabImg } from '@/assets'
import React from 'react'

const Collaborator = ({ data }) => {
    return (
        <div className='bg-white py-12 '>
            <div className='w-11/12 mx-auto md:p-8 '>
                <div className=' md:flex justify-between text-black'>
                    <div className='flex flex-col gap-2 '>
                        <div className='flex flex-col xl:gap-2'>
                            <p className='font-Roboto text-primary font-semibold'>AI Collaborative Campaign</p>
                            <p className='text-black text-15 font-serif'>Nike</p>
                        </div>
                        <div className=' xl:w-full '>
                            <p className='xl:text-65 lg:text-55 md:text-45 text-34 text-primary  xl:leading-76 lg:leading-60 leading-42  font-Roboto font-semibold'>Enhancing creative concepts through AI</p>
                        </div>
                        <div className='flex items-center gap-4 py-8'>
                            <div className=''>
                                <p className='font-InstrumentSerif text-2xl underline underline-offset-4  text-primary'>Project Details</p>
                            </div>
                            <div className='w-3 h-3'>
                                <img src={BlackArrow.src} alt="Arrow" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-92p h-[700px] '>
                        <video preload="none"
                            autoPlay={true}
                            muted
                            playsInline
                            loop
                            className='w-full h-full object-cover'
                            src={data?.aiImage}
                            alt="Image not found" >
                            <source src={data?.aiImage} type="video/mp4" />
                        </video>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Collaborator
