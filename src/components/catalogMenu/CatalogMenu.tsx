import { Button, Dropdown, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsBrandQuery } from "../../store/backend/backend.api";
import OrangeButton from "../UI/OrangeButton/OrangeButton";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  const {data: brands} = useGetProductsBrandQuery('')
  const [sortMethod, setSortMethod] = useState("Цена");
  const [brandMethod, setBrandMethod] = useState("Бренд");
  const [priceParams, setPriceParams] = useState("");
  const [brandParams, setBrandParams] = useState("");
  // const [brandList, setBrandList] = useState<string[]>([])
  const brandList:string[] = ['Все бренды']

  const sortItem = ["Сначала дешевые", "Сначала дорогие"];
  
  brands?.map(elem => {
    brandList.push(elem)
  })
  // useEffect(() => {
  //   for (let i = 0; i < brands?.length!; i ++){
  //     if(brands !== undefined) {
  //       brandList.push(brands[i])
  //     }
  //   }
  // }, [])

  const priceItem: MenuProps["items"] = sortItem.map((elem, index) => ({
    key: `${index}`,
    label: <p onClick={() => clickSort(elem)}>{elem}</p>,
  }));
  const brandItem: MenuProps["items"] = brandList?.map((elem, index) => ({
    key: `${index}`,
    label: <p onClick={() => clickBrand(elem)}>{elem}</p>,
  }));

  const clickSort = (value: string) => {
    setSortMethod(value);
    if (value === "Сначала дешевые") {
      setPriceParams("sortBy=price&sortOrder=asc");
    } else if (value === "Сначала дорогие") {
      setPriceParams("sortBy=price&sortOrder=desc");
    }
  };

  const clickBrand = (value: string) => {
    setBrandMethod(value);
    if (value !== "Все бренды") {
      setBrandParams(`&brand=${value}`);
    }else setBrandParams('')
  };
  console.log(priceParams);
  console.log(sortMethod);
  console.log(brandMethod);

  return (
    <div className={style.menu__container}>
      <Dropdown
        className={style.price}
        key={"1"}
        menu={{ items: priceItem }}
        placement="bottom"
      >
        <Button>{sortMethod}</Button>
      </Dropdown>
      <Dropdown
        className={style.price}
        key={"2"}
        menu={{ items: brandItem }}
        placement="bottom"
      >
        <Button>{brandMethod}</Button>
      </Dropdown>
      <Link to={`/catalog/${priceParams}${brandParams}`}>
        <h1 className={priceParams||brandParams ? [style.btn, style.active].join(' '): style.btn}>Применить</h1>
      </Link>
    </div>
  );
};
export default CatalogMenu;
