import React from "react";
import s from "./LogOut.module.css";
import { useSelector } from "react-redux";
const LogOut = () => {
  const role = useSelector(state=>state.userInfo.role!=="NEW"&&state.userInfo.role);
  return (
        <div>
            {role?<button className={s.logOutBtn}>Выйти</button>:undefined}
        </div>
  );
};

export default LogOut;