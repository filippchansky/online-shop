import React from 'react'
import { IProducts } from '../../models/models'
import { useSearchProductsQuery } from '../../store/backend/backend.api'
import style from "./productcard.module.css"
import img from "../../img/nike_shoes.jpg"
import OrangeButton from '../UI/OrangeButton/OrangeButton'

interface ProductCardProps {
    id: string
    product: IProducts
}

const ProductCard:React.FC<ProductCardProps> = ({id, product}) => {

    
    
    
    return (
        <div className={style.container}>
            <section className={style.section__img}>
                <img src={img} alt="" />
            </section>
            <section className={style.section__info}>
                <p className={style.name}>{product.productName}</p>
                <p className={style.price}>{product.price} руб</p>
                <p className={style.description}>{product.description}</p>
                <OrangeButton>
                    Купить
                </OrangeButton>
            </section>
        </div>
    )
}
export default ProductCard;