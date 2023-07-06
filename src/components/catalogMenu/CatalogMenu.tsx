import { Button, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetProductsBrandQuery,
  useGetProductsSizeQuery,
} from "../../store/backend/backend.api";
import SortBrand from "../SortBrand/SortBrand";
import SortPrice from "../SortPrice/SortPrice";
import SortSize from "../SortSize/SortSize";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  const { data: brands } = useGetProductsBrandQuery("");
  const { data: sizes } = useGetProductsSizeQuery("");
  const [open, setOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState("По цене");
  const [brandMethod, setBrandMethod] = useState("Бренд");
  const [priceParams, setPriceParams] = useState("");
  const [brandParams, setBrandParams] = useState("");
  const [sizeParams, setSizeParams] = useState("");
  const brandList: string[] = [];
  const sizeList: string[] = [];
  const [brandArr, setBrandArr] = useState([]);
  const [checked, setChecked] = useState<boolean>();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [checkedListSize, setCheckedListSize] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  // const [brandList, setBrandList] = useState<string[]>([])

  sizes?.map((elem) => {
    sizeList.push(elem);
  });
  brands?.map((elem) => {
    brandList.push(elem);
  });

  console.log(sizeParams, " - sizeParams");
  console.log(brandParams, " - brandParams");
  console.log(priceParams, " - priceParams");

  const cleanParams = () => {
    // setBrandArr([]);
  };

  const removeFilter = () => {
    setPriceParams("");
    setSortMethod("По цене");
    setChecked(false);
    setBrandParams("");
    setCheckedList([]);
    setCheckAll(false);
    setCheckedListSize([]);
  };

  return (
    <div className={style.menu__container}>
      <Link to={"/catalog/products"}>
        <Button type="text" danger onClick={removeFilter}>
          Сбросить фильтры
        </Button>
      </Link>
      <SortPrice
        setSortMethod={setSortMethod}
        setPriceParams={setPriceParams}
        sortMethod={sortMethod}
      />
      <SortBrand
        setCheckedList={setCheckedList}
        setIndeterminate={setIndeterminate}
        setCheckAll={setCheckAll}
        brandList={brandList}
        setChecked={setChecked}
        setBrandParams={setBrandParams}
        indeterminate={indeterminate}
        checkAll={checkAll}
        checkedList={checkedList}
      />
      <SortSize
        sizeList={sizeList}
        setCheckedListSize={setCheckedListSize}
        checkedListSize={checkedListSize}
        setSizeParams={setSizeParams}
        brandParams ={brandParams}
        sizeParams={sizeParams}
      />
      {/* {brandList?.map(brand => (
        <Checkbox>{brand}</Checkbox>
      ))} */}
      <Link to={`/catalog/${priceParams}${brandParams}${sizeParams}`}>
        <h1
          onClick={cleanParams}
          className={
            checked || priceParams || sizeParams
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
