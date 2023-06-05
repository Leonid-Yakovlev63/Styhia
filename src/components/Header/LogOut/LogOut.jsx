import React from "react";
import s from "./LogOut.module.css";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../service/api";
import { loaded, setUser } from "../../../redux/redux";
const LogOut = () => {
  const dispatch = useDispatch();
  const role = useSelector(state=>state.userInfo.role!=="NEW"&&state.userInfo.role);
  return (
        <div>
            {role?<button className={s.logOutBtn} onClick={()=>api.logout().then(v=>{
              if(v.ok){
                api.getUserInfo().then(u=>dispatch(setUser(u))).catch(()=>dispatch(setUser({})));
              }
            })}>
              <p className={s.logOutText}>Выйти</p>
              </button>:undefined}
        </div>
  );
};

export default LogOut;