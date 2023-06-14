import React from 'react'
import banner from "../../img/Banner.png";
import style from "./banner.module.css"
interface BannerProps {
    
}

const Banner:React.FC<BannerProps> = ({}) => {
    
    return (
        <div className={`container ${style.banner}`}>
            <img src={banner} alt="" />
            <h1 className={style.banner__title}>Заголовок страницы</h1>
        </div>
    )
}
export default Banner;