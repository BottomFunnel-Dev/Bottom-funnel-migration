import React from "react";
// Import Swiper React components
import './verticalSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import "./IndustriesCarousel.css";

// import required modules
import { Mousewheel, Pagination, Scrollbar } from "swiper";

const VerticalSilder = () => {
  return (
    <div className="hemantslider">
      <Swiper 
       direction={"vertical"}
      
      >
        <SwiperSlide>
          <h1>hello hemant you are here for once</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>hello hemant you are here for twice</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>hello hemant you are here for thrice</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VerticalSilder;
