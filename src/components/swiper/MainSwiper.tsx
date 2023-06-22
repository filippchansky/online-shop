import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./mainswiper.css";
import SwiperCard from "../swiperCard/SwiperCard";
import { Navigation, Pagination } from "swiper";
import { useSearchProductsQuery } from "../../store/backend/backend.api";

interface MainSwiperProps {}

const MainSwiper: React.FC<MainSwiperProps> = ({}) => {

    let sliderCount = 3

    const {data} = useSearchProductsQuery('0')
    console.log(data)

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
        loop={true} // бесконечная прокрутка рабоает только если число слайдов > 5
        slidesPerView={sliderCount} 
        spaceBetween={0}
        navigation
        >
          {data?.content?.map(product => (
            <SwiperSlide key={product.productId}>
              <SwiperCard product ={product}/>
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default MainSwiper;

