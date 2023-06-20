import React from 'react'
import { Link } from 'react-router-dom'
import { IProducts } from '../../models/models'
import style from "./catalogcard.module.css"
import img from "../../img/nike_shoes.jpg"

interface CatalogCardProps {
    product: IProducts
}

const CatalogCard:React.FC<CatalogCardProps> = ({product}) => {
    
    return (
        
        <div className={style.card__container}>
            <img src={img} alt="" className={style.card__img} />
            <div className={style.card__info}>
                <p className={style.price}>{product.price} руб.</p>
                <p className={style.name}>{product.productName}</p>
            </div>
        </div>
        
    )
}
export default CatalogCard;