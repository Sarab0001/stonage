import { Be, Instagram, NavbarImg, Website,Linkedin } from '@/assets'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-secondary '>
            <div className='flex justify-between w-5/6     mx-auto'>
                <div className='flex flex-col gap-2 p-8'>
                    <div>
                        <h1 className='text-65'>STONEAGE ROMEO</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>HOME</p>
                        <p>WORK</p>
                        <p>CONTACT</p>
                    </div>
                </div>
                <div className='w-269 h-269'>
                    <img src={NavbarImg.src} alt="" />
                </div>
            </div>
            <div className='flex justify-between w-5/6 p-8 mx-auto  py-4'>
                <div>
                    <p className='text-lg'>Copyright © 3330 BC - 2024 Stoneage Romeo | Sydney | Worldwide</p>
                </div>
                <div className='flex gap-4'>
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
