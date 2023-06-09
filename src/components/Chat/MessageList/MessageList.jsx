import React from 'react';
import s from './MessageList.module.css';
import Message from './Message/Message';

const MessageList = ({ messages }) => {
    return (
        <div id='messagesBlock' style={{overflowY:"scroll"}} className={s.messageList} onLoad={()=>{
            let block = document.getElementById('main');
            block.scrollTop = block.scrollTopMax;
        }}>
            {messages?messages.sort(v=>-v.id).map(v=><Message data={v} />):undefined}
        </div>
    )
}

export default MessageList;