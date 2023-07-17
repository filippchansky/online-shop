import React from "react";
import Banner from "../components/banner/Banner";
import MainSwiper from "../components/swiper/MainSwiper";
import { useSearchProductsQuery } from "../store/backend/backend.api";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {

  document.title = 'Главная'
 
  return (
    <>
        <Banner/>
        <MainSwiper/>
    </>
  );
};
export default MainPage;
