import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CarouselImage } from "../../Constant/constant";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./servicesCarousel.scss"

const ServicesCarousel = () => {
  const settings = {
       
    // dots: true,
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
  };
  return (
    <div>
         <Slider {...settings} >
 {CarouselImage.map((item)=>(
 <div className="carousel-image">
 <img src={item.image} alt={item.title}/>
 <p className="legend">{item.title}</p>
</div>
 ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
