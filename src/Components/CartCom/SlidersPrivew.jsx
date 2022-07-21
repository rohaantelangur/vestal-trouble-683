import { Box } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
let sliderData=[
    {
        id:1,
        image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_200x.jpg",
        title:"M-61",
        brand:"PowerGlow® Peel",
        price:"$118"
    },
    {
        id:2,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:3,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:4,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:5,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:6,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:7,
        image:"",
        title:"",
        brand:"",
        price:""
    },
    {
        id:8,
        image:"",
        title:"",
        brand:"",
        price:""
    },


]

export const SlidersPrivew = () => {
  return (
    <Box>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        
       
   
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  )
}
