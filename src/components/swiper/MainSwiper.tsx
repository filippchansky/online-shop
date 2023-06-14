import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./mainswiper.css";
import SwiperCard from "../swiperCard/SwiperCard";
import { Navigation, Pagination } from "swiper";

interface MainSwiperProps {}

const MainSwiper: React.FC<MainSwiperProps> = ({}) => {

    let sliderCount = 3

    const [width, setWidth] = useState(window.innerWidth)

    if (width<1350) {
        sliderCount = 2
        console.log(sliderCount)
    }
  return (
    <div className="swiper__container container">
      <Swiper 
        modules={[Navigation,Pagination]}
        loop={true}
        slidesPerView={sliderCount} 
        spaceBetween={0}
        navigation
        >
        <SwiperSlide>
          <SwiperCard count="1" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard count="2" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard count="3" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard count="4" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard count="5" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard count="6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MainSwiper;
function usestate(): [any, any] {
    throw new Error("Function not implemented.");
}

