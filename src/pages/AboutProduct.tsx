import { Spin } from 'antd';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CatalogTitle from '../components/catalogTitle/CatalogTitle';
import ProductCard from '../components/productCard/ProductCard';
import { useGetInventoryQuery, useSearchProductByIdQuery, useSearchProductsQuery } from '../store/backend/backend.api';

interface AboutProductProps {
    
}

const AboutProduct:React.FC<AboutProductProps> = ({}) => {
    const {id} = useParams()
    const {data, isLoading, isError} = useSearchProductByIdQuery(id!)
    document.title = data?.productName!
 

    // const {data, isLoading, isError} = useSearchProductsQuery(id!)
    
    console.log(data, 'qweqwe')
    if(isLoading){
        return <Spin tip="Loading" size="large"/>
      }
    

    return (
        <>
        {/* {data?.map(product => (
            <h1>{product.brand}</h1>
        ))} */}

        
            <CatalogTitle key={data?.productId} title={data?.brand!}/>
     
        <div className='container'>
            
                <ProductCard key={data?.productId} product = {data!} id = {id!}/>
       
        </div>
        </>
    )
}
export default AboutProduct;


