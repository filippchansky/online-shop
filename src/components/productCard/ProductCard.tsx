import React, { useState } from "react";
import { IProducts } from "../../models/models";
import { useGetInventoryQuery } from "../../store/backend/backend.api";
import style from "./productcard.module.css";
import img from "../../img/nike_shoes.jpg";
import OrangeButton from "../UI/OrangeButton/OrangeButton";
import { Modal } from "antd";

interface ProductCardProps {
  id: string;
  product: IProducts;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, product }) => {
  const { data: size } = useGetInventoryQuery(`${id!}`);
  console.log(size);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const selectSize = (value: number, index: number) => {
    console.log(value, index);
  };

  return (
    <div className={style.container}>
      <section className={style.section__img}>
        <img src={img} alt="" />
      </section>
      <section className={style.section__info}>
        <p className={style.name}>{product?.productName}</p>
        <p className={style.price}>{product?.price} руб.</p>
        <p className={style.description}>{product?.description}</p>
        <div className={style.size}>
          <p>Размеры:</p>
          {size?.map((elem: number, index) => (
            <button
              className={style.btn__size}
              onClick={() => selectSize(elem, index)}
              key={index}
            >
              {elem}
            </button>
          ))}
        </div>
        <OrangeButton onClick={showModal}>
          <p>Купить</p>
        </OrangeButton>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <img
            src="https://sun9-36.userapi.com/impg/8dIHCIJIHv4TaquE8eR5rZJ0IgkeU3VFmjfJKg/vXKclrTD5WA.jpg?size=753x942&quality=95&sign=7892ff90be91a224f0859feeeec7cc30&type=album"
            alt=""
          />
          <img
            src="https://sun9-43.userapi.com/impg/lWm8ZCY1Xx6ZQeIZH_7UETxODJG4BdiS2Q3sEw/DpQKgFf15ys.jpg?size=1080x773&quality=96&sign=01eea0bb3d42b97fe474e7350ccac098&type=album"
            alt=""
          />
          <img
            src="https://sun9-20.userapi.com/impg/iGOyefoveNBkiyExfjtyT0VIlaj-39IAR9hkMA/rojG1gb4TPU.jpg?size=1280x866&quality=96&sign=697dd44f83e0ed229f80f6da0ac4e1ad&type=album"
            alt=""
          />
          <img
            src="https://sun9-74.userapi.com/impg/-POy6Yp_hjR536gIiRd4B1NZ9mgtgBX6UOSECA/b3JB6XBRroA.jpg?size=1100x1472&quality=96&sign=7b578e9d7a2ee3fba936ac3da8a3b741&type=album"
            alt=""
          />
          <img
            src="https://sun9-20.userapi.com/impg/TXZodq-b9WAvgNnCK58BkcS430J2malbmCt9HQ/Zux_gA5i1ig.jpg?size=1080x915&quality=95&sign=3acbbaa32e1810d5bbefb37d363d8c52&type=album"
            alt=""
          />
        </Modal>
      </section>
    </div>
  );
};
export default ProductCard;
