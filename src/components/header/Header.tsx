import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.svg";
import Burger from "../UI/burgerMenu/Burger";
import style from "./header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <header className={style.header}>
      <Burger active={burgerActive} setActive={setBurgerActive}>
        <div className={style.burger__header}>
          <Link to={"/"} onClick = {() => setBurgerActive(false)}>
            <img src={logo} alt="" />
          </Link>
        </div>
          <ul className={style.burger__nav}>
          <Link to={"/catalog"} onClick = {() => setBurgerActive(false)}>
              <li className={style.nav__item}>Каталог</li>
            </Link>
            <li className={style.nav__item}>Карточка</li>
            <li className={style.nav__item}>Меню 3</li>
          </ul>
      </Burger>
      <div className={`${style.header__container} container`}>
        <div
          className={style.burger__btn}
          onClick={() => setBurgerActive(!burgerActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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
