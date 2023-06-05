import React from "react";
import s from "./Header.module.css";
import LogOut from "./LogOut/LogOut";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <h1 className={s.title}>
          Стихия
        </h1>
        <div className={s.logoutContainer}>
          <LogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
