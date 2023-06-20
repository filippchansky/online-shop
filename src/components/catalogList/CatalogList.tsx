import React from 'react'
import { Link } from 'react-router-dom';
import { useSearchProductsQuery, } from '../../store/backend/backend.api';
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {

    
    const {isLoading, data, isError} = useSearchProductsQuery('')
    console.log(data, '-data')  
    console.log(isLoading, '-load')
    // console.log(isError, '-error')

    return (
        <div className={style.container}>
          
          {data?.map(product => (
            <Link key={product.productId} to={`/catalog/${product.productId}`}><CatalogCard product = {product}/></Link>
          ))}

        </div>
    )
}
export default CatalogList;