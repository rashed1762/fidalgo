import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './banner.css'
import BannerCardcomp from "./BannerCardcomp";


const Banner = () => {
  
  return (
    <div>
      <div className='grid  lg:grid-cols-2 md:grid-cols-1 lg:w-full'>
        
          <div className='banner1 flex justify-center items-center ' >'
            <div>
            <h1 className=' text-9xl text-white  font-sixcaps '>MOON</h1>
            <h1 className='text-9xl  text-white font-sixcaps  '>SUSHI</h1>
            </div>

         
          </div>
         
          <div className='banner2 flex justify-center items-center' >
          <BannerCardcomp></BannerCardcomp>
          </div>
        
        
      </div>
        
    </div>
  )
}

export default Banner