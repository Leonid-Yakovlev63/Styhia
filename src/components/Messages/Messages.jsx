import React from "react";
import { useState } from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import PageTitle from "../UI/PageTitle/PageTitle";


const Messages = (props) => {

    const [selectedDialog, setSelectedDialog] = useState('');

    const handleDialogSelect = (dialogName) => {
        setSelectedDialog(dialogName);
    };

    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
            onDialogSelect={handleDialogSelect}
            selected={selectedDialog === d.name}
        />
    ));


let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/>);

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
                {selectedDialog && <PageTitle title={selectedDialog} />}
                <div className={s.dialogContent}>{/* ... */}</div>
            </div>
            
        </div>
    )
}

export default Messages;

