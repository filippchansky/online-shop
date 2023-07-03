import { Button, Checkbox, Dropdown, MenuProps, Result } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsBrandQuery } from "../../store/backend/backend.api";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  const { data: brands } = useGetProductsBrandQuery("");
  const [open, setOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState("По цене");
  const [brandMethod, setBrandMethod] = useState("Бренд");
  const [priceParams, setPriceParams] = useState("");
  const [brandParams, setBrandParams] = useState("");
  const [brandArr, setBrandArr] = useState([]);
  const [checked, setChecked] = useState<boolean>();

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  // const [brandList, setBrandList] = useState<string[]>([])

  const brandList: string[] = [];

  const sortItem = ["Сначала дешевые", "Сначала дорогие"];

  brands?.map((elem) => {
    brandList.push(elem);
  });

  const changeBrands = (checkedValues: CheckboxValueType[]) => {
    if (checkedValues.length == 0) {
      setChecked(false);
      setBrandParams("");
    } else if (checkedValues.length > 0) {
      setChecked(true);
      console.log("checked = ", checkedValues);
      setBrandParams(`&brand=${checkedValues.join(",")}`);
    }
  };

  const priceItem: MenuProps["items"] = sortItem.map((elem, index) => ({
    key: `${index}`,
    label: <p onClick={() => clickSort(elem)}>{elem}</p>,
  }));
  // const brandItem: MenuProps["items"] = brandList?.map((elem, index) => ({
  //   key: `${index}`,
  //   label: <Checkbox.Group options={[elem]} onChange={changeBrands}/>
  // }));

  const clickSort = (value: string) => {
    setSortMethod(value);
    if (value === "Сначала дешевые") {
      setPriceParams("sortBy=price&sortOrder=asc");
    } else if (value === "Сначала дорогие") {
      setPriceParams("sortBy=price&sortOrder=desc");
    }
  };

  // let res: string[] = [];
  // const clickBrand = (value: string) => {
  //   console.log(value)
  //   setBrandMethod(value);
  //   if (value !== "Все бренды") {
  //     brandArr.push(value);
  //     setBrandParams(`&brand=${brandArr.join(",")}`);
  //   } else setBrandParams("");
  // };
  // console.log(priceParams);
  // console.log(sortMethod);
  // console.log(brandMethod);
  const cleanParams = () => {
    setBrandArr([]);
  };

  const removeFilter = () => {
    setPriceParams("");
    setSortMethod("По цене");
    setChecked(false);
    setBrandParams("");
  };

  return (
    <div className={style.menu__container}>
      <Link to={"/catalog/products"}>
        <Button type="text" danger onClick={removeFilter}>
          Сбросить фильтры
        </Button>
      </Link>
      <Dropdown
        className={style.price}
        trigger={["click"]}
        key={"1"}
        menu={{ items: priceItem }}
        placement="bottom"
      >
        <Button>{sortMethod}</Button>
      </Dropdown>
      <div className={style.checkbox__brands}>
        <Checkbox.Group
          style={{ flexDirection: "column", gap: "10px" }}
          options={brandList}
          onChange={changeBrands}
        />
      </div>
      {/* {brandList?.map(brand => (
        <Checkbox>{brand}</Checkbox>
      ))} */}
      <Link to={`/catalog/${priceParams}${brandParams}`}>
        <h1
          onClick={cleanParams}
          className={
            checked || priceParams
              ? [style.btn, style.active].join(" ")
              : style.btn
          }
        >
          Применить
        </h1>
      </Link>
    </div>
  );
};
export default CatalogMenu;
