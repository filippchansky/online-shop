import React from 'react'
import { IPhotos } from '../../models/models'
import style from "./catalogcard.module.css"

interface CatalogCardProps {
    item: IPhotos
}

const CatalogCard:React.FC<CatalogCardProps> = ({item}) => {
    
    return (
        <div className={style.card__container}>
            {/* <img src={item.url} alt="" className={style.card__img} />
            <div className={style.card__info}>
                <p>{item.title}</p>
            </div> */}
        </div>
    )
}
export default CatalogCard;