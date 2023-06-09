import React, { useEffect, useState } from 'react'
import s from './Chat.module.css'
import PageTitle from "../UI/PageTitle/PageTitle";
import InputPanel from './InputPanel/InputPanel';
import MessageList from './MessageList/MessageList';
import api from '../../service/api';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');
    const params = useParams();
    useEffect(()=>{
        api.getMessagesByChatId(params.id).then(v=>setMessages(v));
    }, []);

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const send = () => {
        api.sendMessages(params.id, newMessage).then(v=>api.getMessagesByChatId(params.id).then(v=>setMessages(v)))
    }

    return (
        <div className={s.main}>
            <PageTitle title = 'Чат' />
            <div className={s.chatContainer}>
                <MessageList messages={messages.sort(v=>v.id)} />
                <InputPanel setV={handleInputChange} send={send} />
            </div>
        </div>
    )
}

export default Chat;