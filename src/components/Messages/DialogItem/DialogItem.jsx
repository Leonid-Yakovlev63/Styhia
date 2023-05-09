import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Messages.module.css'


const DialogItem = (props) => {

    let path=('/dialogs/' + props.id) ;

    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to= {path} style={({ isActive }) => ({
color: isActive ? 'white' : '#000000',})}><a>{props.name}</a></NavLink>
</div>
}

export default DialogItem;