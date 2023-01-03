import React from "react";
import "./portSection.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import "../Carousel/IndustriesCarousel.css";

// import required modules
import { Mousewheel, Pagination, Scrollbar } from "swiper";

const PortSection = () => {
  return (
    <div className="portSection">
      <Swiper
        className="mySwiper"
        direction={"vertical"}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        sensitivity={1}
        modules={[Mousewheel, Pagination, Scrollbar]}
        scrollbar={{ draggable: true }}
        mousewheel={{
          //   forceToAxis: true,
          releaseOnEdge: true,
          touchReleaseOnEdges: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          // 768: {
          //   slidesPerView: 4,
          //   // spaceBetween: 40,
          // },
          1024: {
            slidesPerView: 1,
            // spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="_c1"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="_c2"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="_c1"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="_c2"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="_c1"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortSection;
