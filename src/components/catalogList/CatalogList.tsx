import React from 'react'
import { useSearchUsersQuery } from '../../store/backend/backend.api';
import CatalogCard from '../catalogCard/CatalogCard';
import style from "./cataloglist.module.css"

interface CatalogListProps {
    
}

const CatalogList:React.FC<CatalogListProps> = ({}) => {

    
    const {isLoading, data, isError} = useSearchUsersQuery('10')

    console.log(data, '-data')  
    console.log(isLoading, '-load')
    // console.log(isError, '-error')

    return (
        <div className={style.container}>
            {isLoading ? <p>Загрузка</p>: data?.map(item => (
                <CatalogCard key={item.id} item={item}/>
            ))}
            
        </div>
    )
}
export default CatalogList;