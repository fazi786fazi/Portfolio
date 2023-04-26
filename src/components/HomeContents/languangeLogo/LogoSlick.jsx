import React from 'react'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';
import Slider from "react-slick";
import { SlickLogoImage } from '../../Constant/constant';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./logoSlick.scss"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        
        className="next-arrow "
        // style={{ ...style}}
        onClick={onClick}
      > <AiOutlineArrowRight /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="prev-arrow"
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      ><AiOutlineArrowLeft/></div>
    );
  }

const LogoSlick = () => {
   
    const settings = {
       
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
     
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='programming-language'>
    <h2> Multiple items </h2>
    <Slider {...settings} >
      {SlickLogoImage.map((item)=>(
        <div>
        <img src={item.image} alt={item.title} />
      </div>
      ))}
    </Slider>
  </div>
  )
}

export default LogoSlick
