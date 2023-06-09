import React from 'react'
import s from './Message.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Message = ({data}) => {
    let id = useSelector(state=>state?.userInfo?.id);
    const history = useNavigate();
    return (
        <div className={`${s.message} ${id==data?.author?.id ? s.ownMessage : s.otherMessage}`}>
            <div className={s.contentContainer}>
                <div className={s.avatar} onClick={()=>history(`/profile/${data?.author?.id}`)}>
                    <img src={`/api/avatars/${data?.author?.avatar??null}`}/>
                </div>
                <div className={s.content}>
                    <div className={s.name} onClick={()=>history(`/profile/${data?.author?.id}`)}>
                        <p>{data?.author?.name} {data?.author?.surname}</p>
                    </div>
                    <div className={s.date}>
                        <p>{new Date(data.sentAt).toLocaleString()}</p>
                    </div>
                    <div className={s.messageContent}>
                        {data.text}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;