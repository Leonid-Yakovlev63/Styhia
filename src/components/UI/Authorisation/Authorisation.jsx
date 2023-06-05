import React from "react";
import s from "./Authorisation.module.css";
import { useState } from "react";
import api from "../../../service/api";
import { loaded, setUser } from "../../../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Authorisation = (props) => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const auth = useSelector(state=>state.userInfo?.role&&!state.loading);
        const history = useNavigate();
        if(auth) return history("/profile", {replace: true, relative:'path'});
        const dispatch = useDispatch();
        const handleSubmit = async (event) => {
            event.preventDefault();
            api.login(email, password).then(r=>{
              if(r.ok){
                api.getUserInfo().then(u=>dispatch(setUser(u))).catch(()=>dispatch(loaded()));
              }
            })
          
        };
        

  return (
    <div className={s.componentWrapper}>
        <div className={s.registrationTitle}>
            <h1>Авторизация</h1>
        </div>
        <form className={s.registration} onSubmit={handleSubmit}>
                <div className={s.regItem}>
                    <label className={s.label}for="email"><b>Email</b></label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={s.regItem}>
                    <label className={s.label}for="psw"><b>Пароль</b></label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={s.button}>
                    <button type="submit"><p>Войти</p></button>
                </div>
                <div className={s.restore}>
                    <h3>Забыли пароль?<strong> <a>Восстановить!</a></strong></h3>
                </div>
        </form>
    </div>
  );
};

export default Authorisation;
