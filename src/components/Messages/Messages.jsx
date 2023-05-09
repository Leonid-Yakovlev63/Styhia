import React from "react";

import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useState } from "react";
import PageTitle from "../UI/PageTitle/PageTitle";


const Messages = (props) => {
    const [dialogs] = useState([{id: 1, name:'Алмаз'},
    {id: 2, name:'Евгений'},
    {id: 3, name:'Владислав'},
    {id: 4, name:'Олег'},
    {id: 5, name: 'Игорь'}]);
    
    const [messages] = useState([{id: 1, message:'Привет, я написал новый стих, получилось очень круто!'},
    {id: 2, message:'Давай созвонимся в Дискорде'},
    {id: 3, message:'Привет, я прочитал недавно стихи Лермонтова, захватывает дух'},
    {id: 4, message:'Я начал недавно сочинять свои стихи'},
    {id: 5, message:'Привет, ставлю тебе зачёт автоматом!'}]);

    let path=('/dialogs/' + props.id) ;

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

let messagesElements = messages.map( m => <Message message={m.message}/>);

    return(
        <div>
            <PageTitle title = 'Сообщения'/>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.currentDialog}>
                <PageTitle title = 'Елизавета'/>
                <div className={s.dialogContent}>
                    
                </div>
            </div>
        </div>
    )
}

export default Messages;

