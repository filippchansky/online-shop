import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../img/Logo.svg";
import style from "./footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.footer__container}`}>
        <div className={style.footer__logo}>
          <Link to={'/'}><img src={logoFooter} alt="" /></Link>
          <p className={style.footer__contacts}>8-800-555-35-35</p>
          <p className={style.footer__email}>test@mail.com</p>
        </div>
        <ul className={style.footer__links}>
            <li><a href="#">Ссылка в подвале</a></li>
            <li><a href="#">Ссылка в подвале</a></li>
            <li><a href="#">Ссылка в подвале</a></li>
            <li><a href="#">Ссылка в подвале</a></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
