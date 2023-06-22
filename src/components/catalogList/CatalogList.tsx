import { Button } from "antd/es/radio";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { number } from "yargs";
import { IProducts } from "../../models/models";
import {
  useSearchProductPriceQuery,
  useSearchProductsQuery,
} from "../../store/backend/backend.api";
import CatalogCard from "../catalogCard/CatalogCard";
import style from "./cataloglist.module.css";

interface CatalogListProps {}

const CatalogList: React.FC<CatalogListProps> = ({}) => {
  const [totalPage, setTotalPage] = useState<number>();
  const { pages, sort } = useParams();
  const [currentPage, setCurrentPage] = useState("0");
  console.log(pages, sort, "useParams");

  if (sort != undefined) {
      console.log('сортировка')
  }else if(pages != undefined) {
    console.log('каталог')
  }
  const { isLoading, data, isError } = useSearchProductPriceQuery({
    page: `${currentPage}`,
    sortMethod: `${sort}`,
  });

  console.log(data, "- data");
  console.log(isLoading, "- isloading");

  useEffect(() => {
    setTotalPage(data?.totalPages!);
    console.log(totalPage, "zxc");
  }, [data?.totalPages]);

  let pageArr = [];
  if (data?.totalPages != undefined) {
    for (let i = 0; i < data.totalPages; i++) {
      // насколько правильно данное решение не мне судить, но это работает
      pageArr.push(String(i + 1));
    }
    console.log(pageArr, "pageaar");
  }

  const addPage = () => {
    console.log(totalPage, "qwe"); // господи иисусе помоги помилуй почему у меня здесь андефаин
    console.log(data?.totalPages); // а тут какого-то хуя число хотя я эту дату закинул в карентпэйдж в 30 строчке!!!!!!
  };

  const changePage = (page: string) => {
    console.log(page);
    let pageStr = Number(page) - 1;
    setCurrentPage(String(pageStr));
  };

  // console.log(Array.from({length: data?.totalPages}))

  return (
    <div className={style.container}>
      <div className={style.products}>
        {data?.content?.map((product) => (
          <Link
            key={product.productId}
            to={`/catalog/product/product_id=${product.productId}`}
          >
            <CatalogCard product={product} />
          </Link>
        ))}
      </div>

      <div className={style.pagination}>
        {pageArr.map((page) => (
          // <Link key={page} to={`/catalog/${page}`}><Button>{page}</Button></Link>
          <button className={String(Number(page)-1)==currentPage? [style.btn__pagination, style.active].join(' ') : style.btn__pagination } key={page} onClick={() => changePage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CatalogList;
