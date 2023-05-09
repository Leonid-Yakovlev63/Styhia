import React from "react";
import s from "./Registration.module.css";
import { useState } from "react";
const Registration = (props) => {

     
        const [firstName, setFirstName] = useState("");
        const [surName, setSurName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [checkPassword, setCheckPassword] = useState("");
      
        const handleSubmit = async (event) => {
            event.preventDefault();
            
            const response = await fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ firstname : firstName, surname : surName, email, password }),
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
            <h1>Регистрация</h1>
        </div>
        <form className={s.registration} onSubmit={handleSubmit}>
                <div>
                    <label for="email"><b>Email</b></label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label for="psw"><b>Пароль</b></label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label for="psw-repeat"><b>Повторите пароль</b></label>
                    <input type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
                </div>
                <div>
                    <label for="name"><b>Имя</b></label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label for="last-name"><b>Фамилия</b></label>
                    <input type="text" value={surName} onChange={(e) => setSurName(e.target.value)} />
                </div>
                <div className={s.button}>
                    <button type="submit">Зарегистрироваться</button>
                </div>
        </form>
    </div>
  );
};

export default Registration;
