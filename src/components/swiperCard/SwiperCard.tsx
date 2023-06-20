import React from 'react'
import style from './swipercard.module.css'
import swiperImg from "../../img/nike_shoes.jpg"

interface SwiperCardProps {
}

const SwiperCard:React.FC<SwiperCardProps> = () => {
    
    return (
        <div className={style.card}>    
            <div className={style.card__content}>
                <h1></h1>
                <img src={swiperImg} alt="" />
            </div>
        </div>
    )
}
export default SwiperCard;