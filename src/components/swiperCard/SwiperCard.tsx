import React from 'react'
import style from './swipercard.module.css'
import swiperImg from "../../img/prigozhin.jpg"

interface SwiperCardProps {
    count: string
}

const SwiperCard:React.FC<SwiperCardProps> = ({count}) => {
    
    return (
        <div className={style.card}>    
            <div className={style.card__content}>
                <h1>{count}</h1>
                <img src={swiperImg} alt="" />
            </div>
        </div>
    )
}
export default SwiperCard;