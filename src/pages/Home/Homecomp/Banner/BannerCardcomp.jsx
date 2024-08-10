import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1  from '../../../../assets/sushi-menu-img1-1-removebg-preview.png'
import img2  from '../../../../assets/sushi-menu-img2-removebg-preview.png'
import img3  from '../../../../assets/sushi-menu-img3-removebg-preview.png'

const BannerCardcomp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div className="slider-container banner2slide">
      <Slider {...settings}>
        <div className="ml-20 ">
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-jost font-light">SUSHI HAVEN</h2>
    <p className="font-jost font-light">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?
    If a dog chews shoes whose shoes does he choose?
    </p>
    <button className="btn btn-outline btn-secondary font-jost font-bold">Secondary</button>
   
    
  </div>
</div>



        </div>
        <div className="ml-20">

        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img2}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-jost font-light">SUMI ROLL</h2>
    <p className="font-jost font-light">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?
    If a dog chews shoes whose shoes does he choose?
    </p>
    <button className="btn btn-outline btn-secondary font-jost font-bold">Secondary</button>
   
    
  </div>
</div>



        </div>
        <div className="ml-20">
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img3}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-jost font-light">CRISPY TUNA</h2>
    <p className="font-jost font-light">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?
    If a dog chews shoes whose shoes does he choose?
    </p>
    <button className="btn btn-outline btn-secondary font-jost font-bold">Secondary</button>
   
    
  </div>
</div>
        </div>
       
      </Slider>
    </div>
    </div>
  )
}

export default BannerCardcomp