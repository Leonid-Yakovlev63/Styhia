import React from "react";
import s from "./Authorisation.module.css";
import { useState } from "react";
const Authorisation = (props) => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

      
        const handleSubmit = async (event) => {
            event.preventDefault();
            
            const response = await fetch("/api/authorisation", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
              // обработать успешную регистрацию
            } else {
              // обработать ошибку регистрации
            }
          
          
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
