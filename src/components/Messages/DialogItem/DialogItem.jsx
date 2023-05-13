import React, { useState } from "react";
import s from './../Messages.module.css';

const DialogItem = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        props.onDialogSelect(props.name);
        setSelected(true);
    };

    return (
        <div className={`${s.dialog} ${selected ? s.active : ''}`}>
            <a onClick={handleClick}>{props.name}</a>
        </div>
    );
};

export default DialogItem;
