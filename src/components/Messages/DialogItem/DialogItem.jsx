import React, { useState } from "react";
import s from './../Messages.module.css';

const DialogItem = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        props.onDialogSelect(props.name);
    };

    return (
        <div 
            className={`${s.dialog} ${selected ? s.active : ''}`}
            onClick={handleClick}
        >
            <a className = {s.cursor}>{props.name}</a>
        </div>
    );
};

export default DialogItem;
