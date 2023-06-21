import React from 'react'
import style from './swipercard.module.css'
import swiperImg from "../../img/nike_shoes.jpg"
import { IProducts } from '../../models/models'

interface SwiperCardProps {
    product: IProducts
}

const SwiperCard:React.FC<SwiperCardProps> = ({product}) => {
    
    return (
        <div className={style.card}>    
            <div className={style.card__content}>
                <h1>{product.productId}</h1>
                <img src={swiperImg} alt="" />
            </div>
        </div>
    )
}
export default SwiperCard;