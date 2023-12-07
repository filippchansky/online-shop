import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React from "react";
import style from "./sortbrand.module.css";

interface SortBrandProps {
  setCheckedList: Function;
  setIndeterminate: Function;
  setCheckAll: Function;
  setChecked: Function;
  setBrandParams: Function;
  brandList: string[];
  indeterminate: boolean;
  checkAll: boolean;
  checkedList: any; // TODO: найти правильный тип
  setBrandSize: Function
}

const SortBrand: React.FC<SortBrandProps> = ({
  setBrandParams,
  setCheckAll,
  setChecked,
  setCheckedList,
  setIndeterminate,
  brandList,
  checkAll,
  checkedList,
  indeterminate,
  setBrandSize
}) => {

  const changeBrands = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
    setIndeterminate(
      !!checkedValues.length && checkedValues.length < brandList.length
    );
    setCheckAll(checkedValues.length === brandList.length);
    if (checkedValues.length == 0) {
      setChecked(false);
      setBrandParams("");
      setBrandSize('')
    } else if (checkedValues.length > 0) {
      setChecked(true);
      console.log("checked = ", checkedValues);
      setBrandSize(`?brands=${checkedValues.join(',')}`)
      setBrandParams(`&brand=${checkedValues.join(",")}`);
    }
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setChecked(true);
      setBrandParams(`&brand=${brandList.join(",")}`);
      setBrandSize(`?brands=${brandList.join(',')}`)
    } else if (e.target.checked === false) {
      setChecked(false);
    }
    setCheckedList(e.target.checked ? brandList : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className={style.sort__container}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Все бренды
      </Checkbox>
      <div className={style.checkbox__brands}>
        <Checkbox.Group
          style={{ flexDirection: "column", gap: "10px" }}
          options={brandList}
          onChange={changeBrands}
          value={checkedList}
          defaultValue={checkedList}
        ></Checkbox.Group>
      </div>
    </div>
  );
};
export default SortBrand;
