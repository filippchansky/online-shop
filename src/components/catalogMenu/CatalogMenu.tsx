import { Button, Dropdown, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import style from "./catalogmenu.module.css";

interface CatalogMenuProps {}

const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <Link to={`/catalog/asc`}>
        <p >
          По возврастанию
        </p>
        </Link>
      ),
    },
  ];

const CatalogMenu: React.FC<CatalogMenuProps> = ({}) => {
  return (
    <div className={style.menu__container}>
      <Dropdown menu={{ items }} placement="bottom">
        <Button>Фильтровать</Button>
      </Dropdown>
    </div>
  );
};
export default CatalogMenu;
