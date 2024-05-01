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
            <button onClick={toggleDrawer}><img className={pathname == '/workpage' ? 'invert w-44 h-44' : 'w-44 h-44 m-2'} src={Hamburger.src} alt="" /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla !w-52'
            >
                    <div className='p-6 flex flex-col gap-6'>
                        <Link href='/workpage'>
                            <p className='text-black'>WORK</p>
                        </Link>
                        <Link href='/servicepage'>
                            <p className='text-black'>SERVICE</p>
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