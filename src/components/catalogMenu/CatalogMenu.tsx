import { Button, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetProductsBrandQuery,
  useGetProductsSizeQuery,
} from "../../store/backend/backend.api";
import MobileFilter from "../MobileFilter/MobileFilter";
import SortBrand from "../SortBrand/SortBrand";
import SortPrice from "../SortPrice/SortPrice";
import SortSize from "../SortSize/SortSize";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  const [brandSize, setBrandSize] = useState("");
  const [sortMethod, setSortMethod] = useState("По цене");
  const [priceParams, setPriceParams] = useState("");
  const [brandParams, setBrandParams] = useState("");
  const [sizeParams, setSizeParams] = useState("");
  const brandList: string[] = [];
  const sizeList: string[] = [];
  const [checked, setChecked] = useState<boolean>();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [checkedListSize, setCheckedListSize] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [brandList, setBrandList] = useState<string[]>([])

  const { data: brands } = useGetProductsBrandQuery("");
  const { data: sizes } = useGetProductsSizeQuery(`${brandSize}`);

  sizes?.map((elem) => {
    sizeList.push(elem);
  });
  brands?.map((elem) => {
    brandList.push(elem);
  });

  console.log(sizeParams, " - sizeParams");
  console.log(brandParams, " - brandParams");
  console.log(priceParams, " - priceParams");

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const removeFilter = () => {
    setPriceParams("");
    setSortMethod("По цене");
    setChecked(false);
    setBrandParams("");
    setCheckedList([]);
    setCheckAll(false);
    setCheckedListSize([]);
    setSizeParams("");
    setBrandSize("");
  };

  return (
    <>
      <MobileFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
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
          setBrandSize={setBrandSize}
        />
        <SortSize
          sizeList={sizeList}
          setCheckedListSize={setCheckedListSize}
          checkedListSize={checkedListSize}
          setSizeParams={setSizeParams}
          brandParams={brandParams}
          sizeParams={sizeParams}
        />
        <Link to={`/catalog/${priceParams}${brandParams}${sizeParams}`}>
          <h1
            onClick={handleCancel}
            className={
              checked || priceParams || sizeParams
                ? [style.btn, style.active].join(" ")
                : style.btn
            }
          >
            Применить
          </h1>
        </Link>
      </MobileFilter>
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
          setBrandSize={setBrandSize}
        />
        <SortSize
          sizeList={sizeList}
          setCheckedListSize={setCheckedListSize}
          checkedListSize={checkedListSize}
          setSizeParams={setSizeParams}
          brandParams={brandParams}
          sizeParams={sizeParams}
        />
        {/* {brandList?.map(brand => (
        <Checkbox>{brand}</Checkbox>
      ))} */}
        <Link to={`/catalog/${priceParams}${brandParams}${sizeParams}`}>
          <h1
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
    </>
  );
};
export default CatalogMenu;
