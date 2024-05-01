import { ExploreImg, ExploreImg1, ExploreImg2, ExploreImg7 } from '@/assets'
import React from 'react'
import { exploreImages } from '@/constant'
import { ServiceCrousel } from '..';
// import { ServiceSlider } from '..';
const Index = () => {
  console.log(exploreImages);
  return (
    <div className='bg-white '>
      <div className='border-b border-black'>
        <div className='md:flex gap-4 md:w-11/12 mx-auto py-20 p-8 '>
          <div className='lg:w-680 mb-4  lg:h-805'>
            <img src={ExploreImg.src} alt="" />
          </div>
          <div className='lg:w-680 mb-4  lg:h-805'>
            <img src={ExploreImg2.src} alt="" />
          </div>
        </div>

      </div>
      <ServiceCrousel /> 
     <div className=' border-t border-b border-1 border-black'>

      <div className='py-16 md:w-11/12 p-8 mx-auto'>
        <img src={ExploreImg7.src} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Index
