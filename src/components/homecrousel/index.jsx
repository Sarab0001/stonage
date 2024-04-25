'use client'
import { SliderImg1, SliderImg2, SliderImg3, SliderImg4 } from "@/assets";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}


function Responsive() {
  var settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container bg-primary h-346">
      <Slider {...settings}>
        <div className="w-346 h-346">
          <img src={SliderImg1.src} alt="sliderImage1" className="h-full w-full" />
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg2.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg3.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346"> 
          <img src={SliderImg4.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg1.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg2.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg3.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
        <div className="w-346 h-346">
          <img src={SliderImg4.src} alt="sliderImage1" className="h-full w-full"/>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
