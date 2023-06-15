import React from 'react'
import style from "./catalogTitle.module.css"

interface CatalogTitleProps {
    
}

const CatalogTitle:React.FC<CatalogTitleProps> = ({}) => {
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Заговок страницы</h1>
        </div>
    )
}
export default CatalogTitle;