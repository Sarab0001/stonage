import { Be, Instagram, NavbarImg, Website, Linkedin } from '@/assets'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-secondary '>
            <div className='md:flex justify-between  items-end w-11/12  md:py-12 py-8  mx-auto'>
                <div className='flex flex-col md:gap-10 lg:gap-20 xl:p-8 lg:p-0 w-83p text-white'>
                    <div>
                        <h1 className='sm:text-32 font-medium font-Roboto xl:text-65 lg:text-55 text-32 xs:text-38 tracking-normal   text-nowrap relative z-50 cursor-pointer'>STONEAGE ROMEO</h1>
                    </div>
                    <div className='flex flex-col lg:gap-2 xs:gap-1 mt-4 md:mt-0 '>
                        <Link href='/'>
                            <p className='text-lg xs:text-22 font-medium font-Roboto relative z-50'>HOME</p>
                        </Link>
                        <Link href='/work'>
                            <p className='text-lg xs:text-22 font-medium font-Roboto relative z-50'>WORK</p>

                        </Link>
                        <Link href='/contactpage'>
                            <p className='text-lg xs:text-22 font-medium font-Roboto relative z-50'>CONTACT</p>
                        </Link>
                    </div>
                </div>
                <div className='xl:w-25p 2xl:w-15p lg:w-269 lg:h-269  w-145 h-145 mt-40 md:mt-0 xl:mb-7 md:mb-11 lg:mb-0 mx-auto md:mx-0 '>
                    <img src={NavbarImg.src} className='relative z-50 cursor-pointer' alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-4 md:flex md:flex-row justify-between xl:w-87p 2xl:w-89p md:w-11/12 w-95p  mx-auto  py-4'>
                <div>
                    <p className='xl:text-lg lg:text-base md:text-sm  text-center relative z-50 text-white'>Copyright © 3330 BC - 2024 Stoneage Romeo | Sydney | Worldwide</p>
                </div>
                <div className='flex gap-4 justify-center relative z-50'>
                    <div className='lg:w-29 lg:h-29 md:w-6 md:h-8 w-8'>
                        <Link href='https://www.instagram.com/accounts/login/'>
                            <img src={Instagram.src} alt="" />
                        </Link>
                    </div>
                    <div className='lg:w-29 lg:h-29 md:w-6 md:h-8 w-8'>
                        <Link href="https://www.behance.net/">
                            <img src={Be.src} alt="" />
                        </Link>
                    </div>
                    <div className='lg:w-29 lg:h-29 md:w-6 md:h-8 w-8'>
                        <Link href='https://dribbble.com/'>
                            <img src={Website.src} alt="" />
                        </Link>
                    </div>
                    <div className='lg:w-29 lg:h-29 md:w-6 md:h-8 w-8'>
                        <Link href='https://in.linkedin.com/'>
                            <img src={Linkedin.src} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
