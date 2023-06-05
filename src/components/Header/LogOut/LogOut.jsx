import React from "react";
import s from "./LogOut.module.css";
const LogOut = () => {
  const role = useSelector(state=>state.userInfo.role!=="NEW"&&state.userInfo.role);
  return (
        <div>
            {role?<button className={s.logOutBtn}>Выйти</button>:undefined}
        </div>
  );
};

export default LogOut;