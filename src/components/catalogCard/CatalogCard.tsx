import React from 'react'
import style from "./catalogcard.module.css"

interface CatalogCardProps {
    
}

const CatalogCard:React.FC<CatalogCardProps> = ({}) => {
    
    return (
        <div className={style.card__container}>
            <img src="https://via.placeholder.com/300x202" alt="" className={style.card__img} />
            <div className={style.card__info}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ratione assumenda voluptate architecto quas voluptas </p>
            </div>
        </div>
    )
}
export default CatalogCard;