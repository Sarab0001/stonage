'use client'
import { ExploreImg3, ExploreImg4, ExploreImg5, ExploreImg6 } from "@/assets";
import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500
        }
      }
    ]
  };
  return (
    <div className="slider-container overflow-hidden h-[658px]">
      <Slider {...settings}>
        <div className=" !h-[685px] !w-11/12 !mx-auto">
          <img src={ExploreImg3.src} alt="" />
        </div>
        <div className="!h-[685px] !w-11/12 !mx-auto">
          <img src={ExploreImg4.src} alt="" />
        </div>
        <div className="!h-[685px] !w-11/12 !mx-auto">
         <img src={ExploreImg5.src} alt="" />
        </div>
        <div className="!h-[685px] !w-11/12 !mx-auto">
         <img src={ExploreImg6.src} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
