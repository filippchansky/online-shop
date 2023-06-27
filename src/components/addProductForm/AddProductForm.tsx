import { Button } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useAddProductMutation } from "../../store/backend/backend.api";
import style from "./addproductform.module.css";

interface AddProductFormProps {}

const AddProductForm: React.FC<AddProductFormProps> = ({}) => {
    const [createProduct, {}] = useAddProductMutation()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [sex, setSex] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct({
        productName: name,
        description: description,
        price: price,
        brand: brand,
        category: sex,
    }).unwrap()
    setName('')
    setDescription('')
    setPrice(0)
    setBrand('')
    setSex('')
  };

  return (
    <div className={`${style.form__container} container`}>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          className={style.input}
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          className={style.input}
          placeholder="описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input className={style.input} type="number" placeholder="Цена" value={price}
          onChange={(e) => setPrice(Number(e.target.value))} />
        <Input className={style.input} type="text" placeholder="Бренд" value={brand}
          onChange={(e) => setBrand(e.target.value)}/>
        <Input
          className={style.input}
          type="text"
          placeholder="Категория(пол)"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <Button htmlType="submit" className={style.btn}>Отправить</Button>
      </form>
    </div>
  );
};
export default AddProductForm;
