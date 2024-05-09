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
        spaceBetween={15}
        loop={true}

        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          0: {
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
          1450: {
            slidesPerView: 4.5,
            spaceBetween: 17,
          },
          2050: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
        }}
        className={color ? `swiper-containers` : "swiper-container"}
      >
        {sliderImage.map((elem, i) => (
          <SwiperSlide key={i}>
            <div className='lg:mt-8'>
              {elem.image ? (
                <img className="md:w-300 md:h-300 lg:w-346   lg:h-346 2xl:w-550 2xl:h-346 w-278 h-278 object-cover" src={elem.image.src} alt="image" />
              ) : (
                
                <video  className='object-cover md:h-300 lg:h-346 w-346 h-278 2xl:w-550 2xl:h-346' preload="none" autoPlay={true} muted playsInline loop>
                  <source   src={elem.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              )}
            
            </div>
            {hideText && (
              <>
                <h1 className="xs:py-2 py-1 text-black font-semibold">{elem.title}</h1>
                <p className='text-black text-15 font-serif'>{elem.desc}</p>
                <div className='lg:h-300  h-[150px]'></div>
                

              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
