import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProductImages, IProducts } from "../../models/models";
import style from "./catalogcard.module.css";
import img from "../../img/nike_shoes.jpg";
import { useGetImageProductQuery } from "../../store/backend/backend.api";
import { Carousel } from "antd";
import ContentLoader from "react-content-loader";

interface CatalogCardProps {
  product: IProducts;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ product }) => {
  const { productId } = product;
  const [productImg, setProductImg] = useState<IProductImages[]>();
  const { data, isLoading } = useGetImageProductQuery(productId!);

  useEffect(() => {
    setTimeout(() => {
      if (data !== undefined) {
        setProductImg(data);
      }
    }, 3000);
  }, [data]);

  if (productImg === undefined) {
    return (
      <div className={style.card__container}>
        <MyLoader />
        <div className={style.card__info}>
          <p className={style.price}>{product.price} руб.</p>
          <p className={style.name}>{product.productName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.card__container}>
      <Carousel dots={{ className: style.dots }}>
        {productImg?.map((item) => (
          <img src={item.picture} alt="" className={style.card__img} />
        ))}
      </Carousel>
      <div className={style.card__info}>
        <p className={style.price}>{product.price} руб.</p>
        <p className={style.name}>{product.productName}</p>
      </div>
    </div>
  );
};
export default CatalogCard;

const MyLoader = (props: any) => (
  <ContentLoader
    speed={1}
    width={300}
    height={370}
    viewBox="0 0 300 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="11" rx="0" ry="0" width="438" height="403" />
  </ContentLoader>
);
