import React from 'react'
import { useParams } from 'react-router-dom';
import CatalogTitle from '../components/catalogTitle/CatalogTitle';
import ProductCard from '../components/productCard/ProductCard';
import { useSearchProductsQuery } from '../store/backend/backend.api';

interface AboutProductProps {
    
}

const AboutProduct:React.FC<AboutProductProps> = ({}) => {
    const {id} = useParams()

    const {data, isLoading, isError} = useSearchProductsQuery(id!)

    

    return (
        <>
        {data?.map(product => (
            <CatalogTitle key={product.productId} title={product.brand}/>
        ))}
        <div className='container'>
            {data?.map(product => (
                <ProductCard key={product.productId} product = {product} id = {id!}/>
            ))}
        </div>
        </>
    )
}
export default AboutProduct;


