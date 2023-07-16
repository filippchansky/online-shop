import React from "react";
import style from "./infinitebanner.module.css";

interface InfiniteBannerProps {}

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({}) => {
  interface logo {
    src: string;
  }
  const logo = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Logo_Saucony.svg/640px-Logo_Saucony.svg.png",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Reebok_delta_logo.svg/640px-Reebok_delta_logo.svg.png",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Puma_logo.svg/2560px-Puma_logo.svg.png",
      },
  ];

  return (
    <div className={style.logos}>
      <div className={style.slide}>
        {logo.map((item) => (
          <img src={item.src} alt="" />
        ))}
      </div>

      <div className={style.slide}>
        {logo.map((item) => (
          <img src={item.src} alt="" />
        ))}
      </div>
    </div>
  );
};
export default InfiniteBanner;
