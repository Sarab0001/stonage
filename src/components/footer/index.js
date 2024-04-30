import { Be, Instagram, NavbarImg, Website, Linkedin } from '@/assets'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-secondary '>
            <div className='md:flex justify-between w-11/12  md:py-12 py-8  mx-auto'>
                <div className='flex flex-col md:gap-16 xl:p-8 lg:p-1'>
                    <div>
                        <h1 className='text-[32px] font-semibold font-Roboto xl:text-65 lg:text-[55px] md:text-[45px]   text-nowrap'>STONEAGE ROMEO</h1>
                    </div>
                    <div className='flex flex-col lg:gap-2 mt-4 md:mt-0'>
                        <Link href='/'>
                            <p className='text-lg font-semibold font-Roboto'>HOME</p>
                        </Link>
                        <Link href='/workpage'>
                            <p className='text-lg font-semibold font-Roboto'>WORK</p>

                        </Link>
                        <Link href='/contactpage'>
                            <p className='text-lg font-semibold font-Roboto'>CONTACT</p>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-269 lg:h-269 w-[145px] h-[145px] mx-auto md:mx-0'>
                    <img src={NavbarImg.src} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-4 md:flex md:flex-row justify-between w-11/12 xl:p-8 lg:p-1 mx-auto  py-4'>
                <div>
                    <p className='xl:text-lg lg:text-base   text-center'>Copyright © 3330 BC - 2024 Stoneage Romeo | Sydney | Worldwide</p>
                </div>
                <div className='flex gap-4 justify-center '>
                    <div className='w-29 h-29'>
                        <img src={Instagram.src} alt="" />
                    </div>
                    <div className='w-29 h-29'>
                        <img src={Be.src} alt="" />
                    </div>
                    <div className='w-29 h-29'>
                        <img src={Website.src} alt="" />
                    </div>
                    <div className='w-29 h-29'>
                        <img src={Linkedin.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
