import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Person from "../UI/Person/Person";

let activeStyle = {
  color: "#D9D9D9"
};


const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <Person userInfo = {props.userInfo}/>
      <div className={s.items}>
        <div className = {s.item}>
          <NavLink to='profile' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Моя страница</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to='messages' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Сообщения</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to='myPoety' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Мои стихи</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to='friends' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Друзья</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to='lent' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Лента</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to='library' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Библиотека</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
