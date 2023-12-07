import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import React from "react";
import { useGetProductsBrandQuery } from "../../store/backend/backend.api";
import style from "./sortsize.module.css";

interface SortSizeProps {
  sizeList: string[];
  setCheckedListSize: Function;
  checkedListSize: any;
  setSizeParams: Function;
  brandParams: string;
  sizeParams: string;
}

const SortSize: React.FC<SortSizeProps> = ({
  sizeList,
  setCheckedListSize,
  checkedListSize,
  setSizeParams,
  brandParams,
  sizeParams,
}) => {
  const { data: brands } = useGetProductsBrandQuery("");

  const changeSize = (checkedValues: CheckboxValueType[]) => {
    setCheckedListSize(checkedValues);

    console.log(sizeParams);
    if (checkedValues.length === 0) {
      setSizeParams("");
    } else {
      setSizeParams(checkedValues.join(","));
      if (brandParams === "") {
        setSizeParams(
          `brands=${brands?.join(",")}&size=${checkedValues.join(",")}`
        );
      } else if (brandParams != "") {
        setSizeParams(`&size=${checkedValues.join(",")}`);
      }
    }
  };

  return (
    <div className={style.checkbox__size}>
      <Checkbox.Group
        style={{ flexDirection: "column", gap: "10px" }}
        options={sizeList}
        onChange={changeSize}
        value={checkedListSize}
        defaultValue={checkedListSize}
      ></Checkbox.Group>
    </div>
  );
};
export default SortSize;
