import { Spin } from "antd";
import { Button } from "antd/es/radio";
import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { number } from "yargs";
import { IProducts, IResponse } from "../../models/models";
import {
  useGetProductQuery,
  useSearchProductByIdQuery,
  useSearchProductsQuery,
} from "../../store/backend/backend.api";
import CatalogCard from "../catalogCard/CatalogCard";
import style from "./cataloglist.module.css";

interface CatalogListProps {}

const CatalogList: React.FC<CatalogListProps> = ({}) => {
  let page = localStorage.getItem('page')
  const { params, sort } = useParams(); // подтягиваем параметр из динамичного роута
  const [response, setResponse] = useState<IResponse>(); //ответ от сервера
  const [totalPage, setTotalPage] = useState<number>(); // всего страниц (получаем от сервера)
  const [currentPage, setCurrentPage] = useState(JSON.parse(page!) || 0); // текущая страница (по умолчанию 0)
  console.log(params, 'params')
  
  console.log(typeof(JSON.parse(page!)), 'page')
  const { data: product, isLoading, isError } = useSearchProductsQuery({
    page: `${currentPage}`,
    params: `${params}`,
    page_size: '3'
  });

  useEffect(() => {
    if(params?.length!>8) {
      setCurrentPage("0");
    } else {
      setCurrentPage(JSON.parse(page!));
    }
  }, [params]); // при изменении query параметров меняет текущую страницу на первую

  useEffect(() => {
    if (params !== undefined) {
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
    localStorage.setItem('page', JSON.stringify(String(pageStr)))
    window.scrollTo(0,0)
  };

  if (isLoading) {
    return (
      <div className={style.spin}>
        <Spin tip="Loading" size="large" />
      </div>
    );
  }

  if(isError) {
    return <h1>Ошибка</h1>
  }

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
              String(Number(page) - 1) === currentPage
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
