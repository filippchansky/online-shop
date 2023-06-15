import React from 'react'
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {
    
    return (
        <div className={style.container}>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
        </div>
    )
}
export default CatalogList;