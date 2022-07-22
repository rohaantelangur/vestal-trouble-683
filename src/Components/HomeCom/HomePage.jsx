import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomePage.css"

import {bestSeller} from "./SliderData"
import {newArrival} from "./SliderData"
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {  Navigation } from "swiper";
import { Box, Image, Stack, Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <div className="Main_1">
      <div className='nav_1'>
      <div className='free'>
        
<h3>FREE SAMPLES WITH ALL ORDERS </h3>
      </div>

      {/* ## slider */}
<div>
<AliceCarousel autoPlay autoPlayInterval="3000">
  
<img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-des_1600x.jpg?v=1657144325"
             alt=""   />
        <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_7a459285-a1a6-4c17-8383-f26887d149ba_1600x.jpg?v=1656625184"
             alt=""   />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-des_1600x.jpg?v=1657144840"
               alt="" />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-des-2_1600x.jpg?v=1657227342"
              alt=""  />        
      
</AliceCarousel>
</div>

</div>



 {/* First coursal------------------------------------------------------- */}


 <Box h="350px" mt="5" mb="10">
  <div className='nav_a'>
  <h2>SIMILAR PRODUCTS</h2>
  </div>
  
      
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {newArrival.map((item)=>
        {
          return  <SwiperSlide>
          <Stack fontSize={"14px"}>

          <Image color={"#12284c"} h="50px"src={item.image} />
          <Text>{item.brand}</Text>
          <Text color={"gray"} >
            {item.name}
          </Text>
          <Text color={"gray"}>
            $. {item.price}
          </Text>
          </Stack>
        </SwiperSlide>
       
        })

        }
       
        
      </Swiper>
    </Box>



       
{/* line3-------------------------------------------------------- */}


<div className="main3">
      
        <p>OCEAN EYES</p>
      

      <div className="nav2">
        <p>This high-performance treatment resurfaces and reinforces your skin’s
        moisture barrier in one easy step to reveal smooth, radiant skin.</p>
        
      </div>

      <div class="nav">
        <div>
          <a class="menu-cards" href=" ">
            <img
              class="image"
              style={{ width: 250, height: 300 }}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/OSEA_shop_the_collection_600x.progressive.jpg?v=1657661079"
              alt=""
              data-testid=""
            />
          </a>
        </div>


        
        <div className="main_1">
          <a class="menu-cards" href="/menu/biryani-buckets">
            <img
              class="image"
              style={{ width: 150, height: 180 , marginLeft:51}}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-675468101738-1_235x235_crop_center.jpg?v=1658261512"
              alt=""
              data-testid=""
            />
          </a>
          <div nav5>
            <p>OSER</p>
            <p>Seaglow Overnigth serum</p>
            <p>$63</p>
          </div>
        </div>
      </div>
    </div>



{/* coursal 2------------------------------------------------------------ */}



<Box h="350px" mt="5" mb="10">
  <div className='nav_a'>
  <h2>SIMILAR PRODUCTS</h2>
  </div>
  
      
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {bestSeller.map((item)=>
        {
          return  <SwiperSlide>
          <Stack fontSize={"14px"}>

          <Image color={"#12284c"} h="50px"src={item.image} />
          <Text>{item.brand}</Text>
          <Text color={"gray"} >
            {item.name}
          </Text>
          <Text color={"gray"}>
            $. {item.price}
          </Text>
          </Stack>
        </SwiperSlide>
       
        })

        }
       
        
      </Swiper>
    </Box>



{/* line5------------------------------------------------------------------------------ */}



<div className="main4">
      




<div className="nav_1a">
<a class="menu-cards" href=" "><img class='image' style = {{ width : 570, height : 370, marginTop : 20 }}

    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bader_side_by_side_640x.jpg?v=1658339677"
    alt="" data-testid="" />
     
</a>
<h1>The Light Cream</h1>  
  <p>A refreshing, weightless gel emulsion with a matte-like finish from Augustinus Bader. This cream deeply nourishes, combats signs of ageing and targets the root cause of overactive sebum</p> 
    <h2>SHOP NOW</h2>  
</div>
<div className="nav_2a">
<a class="menu-cards" href=" "><img class='image'  style = {{ width : 570, height : 370, marginTop : 20 }}

    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_side_by_side_FINAL_640x.jpg?v=1652904545"
    alt="" data-testid="" />
     
</a>
<div> <h2>Beauty Alfresco</h2>  </div>
    <div class="menu-text"> This summer is all about the outdoors, and we're here for it. You can find everything you need to make your summer outside a success in our curated collection of seasonal essentials. </div>
    <div><h2>SHOP SUMMER MUST-HAVES</h2>  </div>
</div>
   
    </div>


coursal 3---------------------------------------------------------





    </div>
  )
}

export default HomePage