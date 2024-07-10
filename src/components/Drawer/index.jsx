"use client"
import { Hamburger } from '@/assets'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Drawer from 'react-modern-drawer'

const SideDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const pathname = usePathname()

    return (
        <>
            <button onClick={toggleDrawer}><img className={pathname == '/work' ? 'invert w-44 h-44 md:w-[55 px] md:h-[68px]' : 'w-44 h-[46px] m-2 md:w-[55px] md:h-[68px] '} src={Hamburger.src} alt="" /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla !w-52'
            >
                    <div className='p-6 flex flex-col gap-6'>
                        <Link href='/work'>
                            <p className='text-black'>WORK</p>
                        </Link>
                        <Link href='/servicepage'>
                            <p className='text-black'>SERVICES</p>
                        </Link>
                        <Link href='/contactpage'>
                            <p className='text-black'>CONTACT</p>
                        </Link>
                    </div>
            </Drawer>
        </>
    )
}

export default SideDrawer