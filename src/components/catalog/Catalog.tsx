import React, { useEffect } from 'react'
import CatalogList from '../catalogList/CatalogList';
import CatalogMenu from '../catalogMenu/CatalogMenu';
import style from './catalog.module.css'

interface CatalogProps {
    
}
    
const Catalog:React.FC<CatalogProps> = ({}) => {
    useEffect(() => {
        document.title = "Каталог";
      }, []);
    
    return (
        <div className={`${style.catalog__container} container`}>
            {/* РАЗМЕРЫ МЕНЮ ПРЕДПОЛОЖИТЕЛЬНЫЕ НАДО ПОМЕНЯТЬ */}
            <CatalogMenu/>
            <CatalogList/>
        </div>
    )
}
export default Catalog;