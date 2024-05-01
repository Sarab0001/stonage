'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { sliderImage } from '@/constant';

export default function Homecrousel({ hideText,color }) {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        centeredSlides={false}
        spaceBetween={30}

        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 25,
          },
        }}
        className={color ? `swiper-containers` : "swiper-container"}
      >
        {sliderImage.map((elem, i) => (
          <SwiperSlide key={i}>
            <div>
              {elem.image ? (
                <img className="md:w-346 md:h-346 w-[278px] h-[278px]" src={elem.image.src} alt="image" />
              ) : (
                
                <video  className='object-cover md:h-346 w-248' preload="none" autoPlay={true} muted playsInline loop>
                  <source   src={elem.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              )}
            
            </div>
            {hideText && (
              <>
                <h1 className="py-2 text-black">{elem.title}</h1>
                <p className='text-black'>{elem.desc}</p>
                <div className='h-300'></div>
                

              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
