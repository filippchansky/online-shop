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

    if (width<790) {
        sliderCount = 1
        console.log(sliderCount)
    }else if (width<1350){
      sliderCount = 2
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
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MainSwiper;

