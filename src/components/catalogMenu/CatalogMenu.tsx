import { Button, Dropdown, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link to={`/catalog/price asc`}>
        <p>По возврастанию</p>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to={`/catalog/price desc`}>
        <p>По убыванию</p>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to={`/catalog/sortBy=createDate&sortOrder=desc`}>
        <p>Сначала новые</p>
      </Link>
    ),
  },
];

const item: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link to={`/catalog/sortBy=price&sortOrder=asc`}>
        <p>Пqwe</p>
      </Link>
    ),
  },
];



const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  return (
    <div className={style.menu__container}>
      <Dropdown key={'1'} menu={{ items }} placement="bottom">
        <Button>Фильтровать</Button>
      </Dropdown>
      <Dropdown key={'2'} menu = {{items:item}} placement="bottom">
        <Button>Бренд</Button>
      </Dropdown>
    </div>
  );
};
export default CatalogMenu;
