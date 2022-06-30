import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
     const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  }
  return (
    <MyCarousel {...settings}>
    <WrapImg>
      <img  src='/images/slider-badag.jpg'/>
    </WrapImg>
    <WrapImg>
      <img  src='/images/slider-badging.jpg'/>
    </WrapImg>
    <WrapImg>
      <img  src='/images/slider-scale.jpg'/>
    </WrapImg>
    <WrapImg>
      <img  src='/images/slider-scales.jpg'/>
    </WrapImg>
  </MyCarousel>
  )
}

export default Carousel

const MyCarousel = styled(Slider)`
  margin-top:10px;
  .slick-list{
    overflow:visible;
  }
  .slick-prev, .slick-next{
    display:none !important;
  }
  .slick-dots li.slick-active button:before{
    color:white;
  }

  .slick-dots li button:before{
    color:white;
    font-size:11px;
  }
  .slick-active{
    transform:scaleX(.99);
  }
`

const WrapImg = styled.div`
  img{
    border-radius:5px;
    width:100%;
    height:100%;
    border:4px solid transparent;
    transition:all 300ms;
    box-shadow:rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  }

  img:hover{
    border:4px solid rgba(255,255,255,0.6);
  }
`