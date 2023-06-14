import React from 'react'
import banner from "../../img/Banner.png";
import style from "./banner.module.css"
import bannerMobile from "../../img/bannerMobile.jpg"
interface BannerProps {
    
}

const Banner:React.FC<BannerProps> = ({}) => {
    
    return (
        <div className={`container ${style.banner}`}>
            <picture>
                {/* <source srcSet={bannerMobile} media='(max-width:900px)' /> */}
                <img src={banner} alt="" />
            </picture>
            <h1 className={style.banner__title}>Заголовок страницы</h1>
        </div>
    )
}
export default Banner;