import { Button } from "antd/es/radio";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { number } from "yargs";
import { IProducts, IResponse } from "../../models/models";
import {
  useSearchProductPriceQuery,
  useSearchProductsQuery,
} from "../../store/backend/backend.api";
import CatalogCard from "../catalogCard/CatalogCard";
import style from "./cataloglist.module.css";

interface CatalogListProps {}

const CatalogList: React.FC<CatalogListProps> = ({}) => {
  const [response, setResponse] = useState<IResponse>(); //ответ от сервера
  const [totalPage, setTotalPage] = useState<number>(); // всего страниц (получаем от сервера)
  const [currentPage, setCurrentPage] = useState("0"); // текущая страница (по умолчанию 0)
  const { pages, sort } = useParams(); // подтягиваем параметр из динамичного роута
  console.log(pages, sort, "useParams");

  const { isLoading, data, isError } = useSearchProductPriceQuery({
    page: `${currentPage}` || '0',
    sortMethod: `${sort}` ,
  }); // запрос на сортировку

  const { data: catalog } = useSearchProductsQuery(`${currentPage}` || '0'); // запрос на простой вывод товаров 
  
  useEffect(() => {
    if (sort !== undefined) {
      if (data?.content !== undefined) {
        setResponse(data);
      }
    } else if (pages !== undefined) {
      if (catalog?.content !== undefined) {
        setResponse(catalog);
      }
    }
    setTotalPage(response?.totalPages!);
  }, [data?.content, catalog?.content]); // закидываем ответ от сервера в состояние (хз как сделать по другому)

  let pageArr = [];
  if (response?.totalPages != undefined) {
    for (let i = 0; i < response.totalPages; i++) {
      // насколько правильно данное решение не мне судить, но это работает
      pageArr.push(String(i + 1));
    }
  }
  console.log(catalog)
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
