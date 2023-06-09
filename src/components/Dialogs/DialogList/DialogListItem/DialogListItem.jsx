import React from 'react';
import s from './DialogListItem.module.css';
import { useNavigate } from 'react-router-dom';

const DialogListItem = ({data}) => {
  const history = useNavigate();
  return (
    <li className={s.dialogListItem} onClick={()=>history(`/chat/${data.id}`)}>
      <img className={s.dialogAvatar} src={`/api/icons/${data.icon}`} alt="Avatar" />
      <div className={s.dialogInfo}>
        <div>
          <h3>{data.title}</h3>
          {data.lastMessage?<div className={s.dialogInfo}>
            <img src={`/api/avatars/${data?.lastMessage?.author?.avatar}`} alt="" />
            <div>
              <h4>{data?.lastMessage?.author?.name+" "+data?.lastMessage?.author?.surname}</h4>
              <p>{data.lastMessage?.text}</p>
            </div>
          </div>:undefined}
        </div>
        <div className={s.date}>{data.lastMessage?.sentAt?new Date(data.lastMessage.sentAt).toLocaleString():undefined}</div>
      </div>
    </li>
  )
};

  export default DialogListItem;