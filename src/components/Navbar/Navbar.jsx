import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Person from "../UI/Person/Person";
import { useSelector, useDispatch } from "react-redux";

let activeStyle = {
  color: "#D9D9D9"
};


const Navbar = (props) => {
  if (props.userInfo?.role){
    return(
  <nav className={s.nav}>
    <div className={s.person}>
      <Person userInfo = {props.userInfo}/>
    </div>
        
        <div className={s.items}>
          <div className = {s.item}>
            <NavLink to='profile' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Моя страница</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to='chats' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Сообщения</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to='poems' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Мои стихи</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to='friends' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Друзья</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to='requests' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Запросы</NavLink>
          </div>
          <div className = {s.item}>
            <NavLink to='lent' style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>Лента</NavLink>
          </div>
        </div>
      </nav>)
  } else {
  return(
    <nav className={s.nav}>
      <div className={s.items}>
        <div className = {s.item}>
              <NavLink to='login' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Войти</NavLink>
            </div>
            <div className = {s.item}>
              <NavLink to='registration' style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>Зарегистрироваться</NavLink>
            </div>
          </div>
    </nav>
  )
  }

};

export default Navbar;
