'use client'
import React, { useState } from 'react';
import { Hamburger, NavbarImg } from '@/assets';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='bg-primary pb-8 md:pb-0'>
      <div className='w-11/12 mx-auto md:flex justify-between '>
        <div className='flex justify-between items-center'>
          <div>
            <div className='flex items-center gap-8'>
              <div>
                <Link href='/'>
                  <p className='xl:text-65 lg:text-[55px] md:text-[45px] text-[32px] font-Roboto text-nowrap'>STONEGE ROMEO</p>
                </Link>
              </div>
              <div className='hidden lg:flex gap-4 font-Roboto lg:text-15 md:text-sm  '>
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
          <div className='md:hidden'>
            {!showMenu ? (
              <button className='mt-2' onClick={() => setShowMenu(true)}>
                <img src={Hamburger.src} alt="" />
              </button>
            ) : (
              <button onClick={() => setShowMenu(false)}>
                x
              </button>
            )}
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <Link href='/'>
            <img className='xl:w-269 xl:h-269 w-[174px] h-[174px] md:w-[109px] md:h-[109px] relative z-50' src={NavbarImg.src} alt="" />
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className='md:hidden'>
          <div className='flex flex-col items-center gap-4'>
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
