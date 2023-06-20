import React from 'react'
import Catalog from '../components/catalog/Catalog';
import CatalogTitle from '../components/catalogTitle/CatalogTitle';

interface CatalogPageProps {
    
}

const CatalogPage:React.FC<CatalogPageProps> = ({}) => {
    
    return (
        <>
        <CatalogTitle title='Заголовок страницы'/>
        <Catalog/>
        </>
    )
}   
export default CatalogPage;