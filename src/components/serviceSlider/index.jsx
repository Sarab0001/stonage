'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { serviceSliderImg } from '@/constant';
import 'swiper/css';
import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';



export default function servicecrousel({data}) {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        centeredSlides={false}
        spaceBetween={30}
        loop={true}


        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true



          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 25,
          }
        }}
          className="swiper-containers my-32 "
          modules={[Scrollbar]}
      >
        {

          data?.serviceImages.map((elem, i) => (
            <SwiperSlide key={i}>
              <img className='md:h-685 h-456 w-full object-cover' src={elem.src} alt="" />
            </SwiperSlide>
          ))
        }


      </Swiper>
    </>
  );
}
