
import React from 'react'
import style from "./catalogTitle.module.css"

interface CatalogTitleProps {
    title: string
}

const CatalogTitle:React.FC<CatalogTitleProps> = ({title}) => {
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>{title}</h1>
        </div>
    )
}
export default CatalogTitle;