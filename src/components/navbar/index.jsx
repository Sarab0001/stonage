'use client'
import React, { useState } from 'react';
import { Hamburger, NavbarImg } from '@/assets';
import Link from 'next/link';
import { SideDrawer } from '..';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname()


  return (
    <div className={pathname == '/workpage' ? `bg-white text-primary pb-8 md:pb-0 py-3` : "bg-primary pb-8 md:pb-0 py-3"}>
      <div className='md:w-11/12 w-93p mx-auto lg:flex  justify-between '>
        <div className='flex justify-between gap-8 '>
          <div>
            <div className='flex items-center xl:gap-16 lg:gap-8'>
              <div>
                <Link href='/'>
                  <p className='xl:text-65 lg:text-55 md:text-45 text-32 font-semibold font-Roboto text-nowrap'>STONEGE ROMEO</p>
                </Link>
              </div>
              <div className='hidden lg:flex xl:gap-10 lg:gap-5 font-Roboto lg:text-base md:text-sm z-50 font-semibold '>
                <Link href='/workpage'>
                  <p>WORK</p>
                </Link>
                <Link href='/servicepage'>
                  <p>SERVICE</p>
                </Link>
                <Link href='/contactpage'>
                  <p>CONTACT</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='lg:hidden'>
            <SideDrawer/>
          </div>
        </div>
        <div className='flex justify-center '>
          <Link href='/'>
            <img
              className={` xl:w-269 xl:h-269 w-174 h-174 md:w-174 md:h-174 lg:w-150 lg:h-150 relative z-50 my-6 lg:mt-0 ${pathname == '/workpage' ? 'invert' : ''}`}
              src={NavbarImg.src} alt="" />
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className='md:hidden'>
          <div className='flex flex-col items-center gap-4 font-semibold'>
            <Link href='/workpage'>
              <p>WORK</p>
            </Link>
            <Link href='/servicepage'>
              <p>SERVICE</p>
            </Link>
            <Link href='/contactpage'>
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
      )}


    </div>
  );
};

export default Navbar;
