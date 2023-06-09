import {useState, React, useEffect} from 'react';
import s from './CreateChat.module.css';
import Interlocutor from './Interlocutor/Interlocutor';
import PageTitle from '../../UI/PageTitle/PageTitle';
import api from '../../../service/api';

const CreateChat = () => {


    let [interlocutors, setInterlocutors] = useState([]);
    let [title, setTitle] = useState("");
    let [invites, setInvites] = useState({});
    useEffect(()=>{
        api.getUserFriends().then(v=>setInterlocutors(v))
    }, [])

    let interlocutorsList = interlocutors.map(i => <Interlocutor data={i} f={(id, b)=>setInvites({
        ...invites,
        [id]: b
    })}/>);

    return(
        <div className={s.componentWrapper}>
            <PageTitle title='Создание нового чата'/>
            <div className={s.inputWrapper}>
                <input className={s.input} type="text" placeholder='Название чата' onInput={e=>setTitle(e.currentTarget.value)} />
            </div>
            <div className={s.selectUsers}>
                {interlocutorsList}
            </div>
            <button className={s.button} onClick={()=>{
                let users = [];
                for(let i in invites){
                    if(invites[i])
                        users.push(Number(i));
                }
                if(!users?.length)
                return alert("Укажите пользователей")
                api.addDialog(title, users);
            }}>
                <p>Создать чат</p>
            </button>
        </div>
    );
};

export default CreateChat;