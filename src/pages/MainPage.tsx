import React from "react";
import Banner from "../components/banner/Banner";
import MainSwiper from "../components/swiper/MainSwiper";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {

 
  return (
    <>
        <Banner/>
        <MainSwiper/>
    </>
  );
};
export default MainPage;
