import { Button } from "antd/es/radio";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { number } from "yargs";
import { IProducts, IResponse } from "../../models/models";
import {
  useGetProductQuery,
  useSearchProductByIdQuery,
  useSearchProductPriceQuery,
  useSearchProductsQuery,
} from "../../store/backend/backend.api";
import CatalogCard from "../catalogCard/CatalogCard";
import style from "./cataloglist.module.css";

interface CatalogListProps {}

const CatalogList: React.FC<CatalogListProps> = ({}) => {
  const { params } = useParams(); // подтягиваем параметр из динамичного роута
  const [response, setResponse] = useState<IResponse>(); //ответ от сервера
  const [totalPage, setTotalPage] = useState<number>(); // всего страниц (получаем от сервера)
  const [currentPage, setCurrentPage] = useState("0"); // текущая страница (по умолчанию 0)
  const [sortMethod, setSortMethod] = useState("asc");
  const [orderBy, setOrderBy] = useState('')

  const { data: product } = useGetProductQuery({
    page: `${currentPage}`,
    sortBy: `${orderBy}`,
    sortOrder: `${sortMethod}`,
  });

  console.log(params, "- useparams");

  let paramsArray = params?.split(" ");
  console.log(paramsArray)

  useEffect(() => {
    for (let i = 0; i < paramsArray?.length!; i++) {
      if(paramsArray!==undefined){
        if (['price', 'productId'].includes(paramsArray[i])){
          setOrderBy(paramsArray[i])
          console.log(orderBy, 'if')
        }else if(['asc','desc'].includes(paramsArray[i])) {
          console.log(paramsArray[i], 'xyuxu')
          setSortMethod(paramsArray[i])
        }
      }
    }
  }, [paramsArray])
  
  useEffect(() => {
    if (params !== undefined) {
      if (product?.content !== undefined) {
        setResponse(product);
      }
    } else if (params !== undefined) {
      if (product?.content !== undefined) {
        setResponse(product);
      }
    }
    setTotalPage(response?.totalPages!);
  }, [product?.content]); // закидываем ответ от сервера в состояние (хз как сделать по другому)

  let pageArr = [];
  if (response?.totalPages != undefined) {
    for (let i = 0; i < response.totalPages; i++) {
      // насколько правильно данное решение не мне судить, но это работает
      pageArr.push(String(i + 1));
    }
  }
  console.log(product);
  const changePage = (page: string) => {
    console.log(page);
    let pageStr = Number(page) - 1;
    setCurrentPage(String(pageStr));
  };

  return (
    <div className={style.container}>
      <div className={style.products}>
        {response?.content.map((product) => (
          <Link
            key={product.productId}
            to={`/catalog/product/${product.productId}`}
          >
            <CatalogCard product={product} />
          </Link>
        ))}
      </div>

      <div className={style.pagination}>
        {pageArr.map((page) => (
          // <Link key={page} to={`/catalog/${page}`}><Button>{page}</Button></Link>
          <button
            className={
              String(Number(page) - 1) == currentPage
                ? [style.btn__pagination, style.active].join(" ")
                : style.btn__pagination
            }
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CatalogList;
