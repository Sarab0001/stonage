'use client'
import React from "react";
import Slider from "react-slick";
import { sliderImage } from "@/constant";

function Responsive({ hideText = false }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
    <div className="homeslider">
      <div className="slider-container bg-primary md:h-[430px] h-[310px] overflow-hidden">
        <Slider {...settings}>
          {sliderImage.map((elem, i) => (
            <div key={i} className="md:w-346 md:h-346">
              <img src={elem.image.src} alt={`sliderImage${i}`} className="h-full w-full" />
              {hideText && (
                <>
                  <h1 className="text-white mt-4 font-Roboto">{elem.title}</h1>
                  <p className="text-15 font-InstrumentSerif">{elem.desc}</p>
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
