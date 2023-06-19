import React from 'react'
import { useSearchProductsQuery, } from '../../store/backend/backend.api';
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {

    
    const {isLoading, data, isError} = useSearchProductsQuery('products')

    console.log(data, '-data')  
    console.log(isLoading, '-load')
    // console.log(isError, '-error')

    return (
        <div className={style.container}>
            {/* {isLoading ? <p>Загрузка</p>: data?.map(item => (
                <CatalogCard key={item.} item={item}/>
            ))} */}
            
        </div>
    )
}
export default CatalogList;