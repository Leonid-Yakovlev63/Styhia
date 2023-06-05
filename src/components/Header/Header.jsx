import React from "react";
import s from "./Header.module.css";
import LogOut from "./LogOut/LogOut";
const Header = () => {
  return (
    <header className={s.header}>
      <h1>Стихия</h1>
      <LogOut />
    </header>
  );
};

export default Header;
