import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Dialogs.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import DialogList from './DialogList/DialogList';
import api from '../../service/api';
const Dialogs = () => {
        let [dialogs, setDialogs] = useState([]);
        useEffect(()=>{
            api.getDialogs().then(v=>setDialogs(v));
        }, [])
  
        const history = useNavigate();
        return (
            <>
                <PageTitle title='Сообщения' />
                <button className={s.button} onClick={()=>history("/chat/new")}>
                    <p>Новый чат</p>
                </button>
                <DialogList dialogs={dialogs} />
            </>
        );
  }

export default Dialogs;