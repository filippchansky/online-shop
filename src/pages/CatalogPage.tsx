import React from 'react'
import Catalog from '../components/catalog/Catalog';
import CatalogTitle from '../components/catalogTitle/CatalogTitle';
import InfiniteBanner from '../components/InfiniteBanner/InfiniteBanner';

interface CatalogPageProps {
    
}

const CatalogPage:React.FC<CatalogPageProps> = ({}) => {
    
    return (
        <>
        <InfiniteBanner/>
        <Catalog/>
        </>
    )
}   
export default CatalogPage;