import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className="Main">
      <div className='free'>
<h3>FREE SAMPLES WITH ALL ORDERS </h3>
      </div>

      {/* ## slider */}
<div>
<AliceCarousel autoPlay autoPlayInterval="3000">
<img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-des_1600x.jpg?v=1657144325"
                />
        <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_7a459285-a1a6-4c17-8383-f26887d149ba_1600x.jpg?v=1656625184"
                />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-des_1600x.jpg?v=1657144840"
                />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-des-2_1600x.jpg?v=1657227342"
                />        
      
</AliceCarousel>
</div>



    </div>
  )
}

export default HomePage