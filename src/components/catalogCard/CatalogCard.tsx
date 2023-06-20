import React from 'react'
import { Link } from 'react-router-dom'
import { IProducts } from '../../models/models'
import style from "./catalogcard.module.css"

interface CatalogCardProps {
    product: IProducts
}

const CatalogCard:React.FC<CatalogCardProps> = ({product}) => {
    
    return (
        
        <div className={style.card__container}>
            <img src='https://via.placeholder.com/300' alt="" className={style.card__img} />
            <div className={style.card__info}>
                <p>id: {product.productId}</p>
                <p>name: {product.productName}</p>
                <p>price: {product.price}</p>
            </div>
        </div>
        
    )
}
export default CatalogCard;