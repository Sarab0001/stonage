import { ExploreImg, ExploreImg2, ExploreImg7 } from '@/assets'
import React from 'react'
import { exploreImages } from '@/constant'
import { ServiceCrousel } from '..';

const Index = () => {
  console.log(exploreImages);
  return (
    <div className='bg-white '>
      <div className=''>
        <div className='md:flex gap-4 md:w-11/12 mx-auto py-20 p-8 '>
          <div className='lg:w-49p mb-4  lg:h-805'>
            <img src={ExploreImg.src} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='lg:w-49p mb-4  lg:h-805'>
            <img src={ExploreImg2.src} alt="" className='w-full h-full object-cover' />
          </div>
        </div>

      </div>
      <ServiceCrousel /> 
     <div className=' '>

      <div className='py-16 md:w-11/12 p-8 mx-auto'>
        <img src={ExploreImg7.src} alt="" className='object-cover' />
      </div>
     </div>
    </div>
  )
}

export default Index
