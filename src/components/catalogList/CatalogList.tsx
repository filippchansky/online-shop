import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IProducts } from '../../models/models';
import { useSearchProductPriceQuery, useSearchProductsQuery, } from '../../store/backend/backend.api';
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {

    const { sort } = (useParams())
    console.log(sort, 'sort')
    const {isLoading, isFetching, data:products, isError} = useSearchProductPriceQuery(`${sort}`)
    // const {isLoading, isFetching, data:products, isError} = useSearchProductsQuery(``)
    // console.log(isLoading, '- loda')
    // console.log(isFetching, ' - fetch')

    

    // const {data: sortPrice} = useSearchProductPriceQuery(`${sort}`)
    // console.log(data, '-data')  
    // console.log(sortPrice, 'sort')
    // console.log(isError, '-error')
    
    

    return (
        <div className={style.container}>
          
          {products?.map(product => (
            <Link key={product.productId} to={`/catalog/product/product_id=${product.productId}`}><CatalogCard product = {product}/></Link>
          ))}

        </div>
    )
}
export default CatalogList;