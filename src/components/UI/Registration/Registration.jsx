import React from "react";
import s from "./Registration.module.css";
const Registration = (props) => {


  return (
    <div className={s.componentWrapper}>
        <div className={s.registrationTitle}>
            <h1>Регистрация</h1>
        </div>
        <form className={s.registration} onSubmit={}>
                <div>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Email" name="email" required></input>
                </div>
                <div>
                    <label for="psw"><b>Пароль</b></label>
                    <input type="password" placeholder="Пароль" name="psw" required></input>
                </div>
                <div>
                    <label for="psw-repeat"><b>Повторите пароль</b></label>
                    <input type="password" placeholder="Повторите пароль" name="psw-repeat" required></input>
                </div>
                <div>
                    <label for="name"><b>Имя</b></label>
                    <input placeholder="Имя" name="psw-repeat" required></input>
                </div>
                <div>
                    <label for="last-name"><b>Фамилия</b></label>
                    <input placeholder="Фамилия" name="psw-repeat" required></input>
                </div>
                <div className={s.button}>
                    <button type="submit">Зарегистрироваться</button>
                </div>
        </form>
    </div>
  );
};

export default Registration;
