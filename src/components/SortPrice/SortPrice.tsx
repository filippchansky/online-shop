import { Button, Dropdown, MenuProps } from 'antd';
import React, { useState } from 'react'
import style from "./sortprice.module.css"

interface SortPriceProps {
    setSortMethod: Function,
    setPriceParams: Function,
    sortMethod: string
}

const SortPrice:React.FC<SortPriceProps> = ({setPriceParams, setSortMethod, sortMethod}) => {
    // const [sortMethod, setSortMethod] = useState("По цене");
    // const [priceParams, setPriceParams] = useState("");

    const sortItem = ["Сначала дешевые", "Сначала дорогие"];
    const priceItem: MenuProps["items"] = sortItem.map((elem, index) => ({
        key: `${index}`,
        label: <p onClick={() => clickSort(elem)}>{elem}</p>,
      }));

      const clickSort = (value: string) => {
        setSortMethod(value);
        if (value === "Сначала дешевые") {
          setPriceParams("sortBy=price&sortOrder=asc");
        } else if (value === "Сначала дорогие") {
          setPriceParams("sortBy=price&sortOrder=desc");
        }
      };
    
    return (
        <Dropdown
        className={style.price}
        trigger={["click"]}
        key={"1"}
        menu={{ items: priceItem }}
        placement="bottom"
      >
        <Button>{sortMethod}</Button>
      </Dropdown>

    )
}
export default SortPrice;