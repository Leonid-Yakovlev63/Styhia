import React from "react";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
const Header = () => {
  const role = useSelector(state=>state.userInfo.role!=="NEW"&&state.userInfo.role);
  return (
    <header className={s.header}>
      <h1>Стихия</h1>
      {role?<button>logout</button>:undefined}
    </header>
  );
};

export default Header;
