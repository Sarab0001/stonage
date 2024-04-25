import React from 'react'
import { NavbarImg } from '@/assets'

const Navbar = () => {
  return (
    <div className='bg-primary'>
      <div className='w-11/12 mx-auto flex justify-between'>
        <div >
        <div className='flex items-center gap-8'>
          <div>
            <p className='text-65 font-Roboto'>STONEGE ROMEO</p>
          </div>
          <div className='flex gap-4 font-Roboto'>
            <p>WORK</p>
            <p>SERVICE</p>
            <p>CONTACT</p>
          </div>
          </div>
        </div>

        <div>
          <img className='w-269 h-269' src={NavbarImg.src} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Navbar
