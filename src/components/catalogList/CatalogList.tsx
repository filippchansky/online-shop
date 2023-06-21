import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSearchProductPriceQuery, useSearchProductsQuery, } from '../../store/backend/backend.api';
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {

    const { sort } = (useParams())
    const {isLoading, data:products, isError} = useSearchProductsQuery('')
    const [response, setResponse] = useState(products)
    // const {data: sortPrice} = useSearchProductPriceQuery(`${sort}`)
    // console.log(data, '-data')  
    // console.log(sortPrice, 'sort')
    // console.log(isError, '-error')
    
    

    return (
        <div className={style.container}>
          
          {response?.map(product => (
            <Link key={product.productId} to={`/catalog/${product.productId}`}><CatalogCard product = {product}/></Link>
          ))}

        </div>
    )
}
export default CatalogList;