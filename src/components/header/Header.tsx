import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.svg";
import style from "./header.module.css"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={style.header}>
      <div className={`${style.header__container} container`}>
        <div className={style.header__logo}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className={style.header__nav}>
            <Link to={"/catalog"}>
              <li className={style.nav__item}>Каталог</li>
            </Link>
            <li className={style.nav__item}>Карточка</li>
            <li className={style.nav__item}>Меню 3</li>
          </ul>
        </nav>
        <button className={style.btn__header}>Кнопка</button>
      </div>
    </header>
  );
};
export default Header;
