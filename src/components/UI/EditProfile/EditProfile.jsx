import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import s from './EditProfile.module.css'
import { useEffect, useState } from 'react';
import api from '../../../service/api';
import { setUser } from '../../../redux/redux';

const EditProfile = (props) => {
    const user = useSelector(state=>state.userInfo);
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [status, setStatus] = useState("");
    let [file, setFile] = useState(null);
    let fileData = null;
    const dispatch = useDispatch();
    try{
        fileData = URL.createObjectURL(file[0]);
    }catch{}
    return (
        <>
        <PageTitle title='Редактировать профиль'/>
        <div className={s.componentWrapper}>
            <div className={s.editProfile}>
                <form className={s.leftContainer} onSubmit={e=>{
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append("file", file[0], file[0].name);
                    api.setImage(formData).then(v=>{
                        if(v.ok)
                            api.getUserInfo().then(u=>dispatch(setUser(u)))
                    });
                }}>
                    <div className={s.newPhoto}>
                        <p>Новое фото профиля:</p>
                        {fileData?<img className={s.image} src={fileData} />:undefined}
                        <input type="file" name='photo' onInput={e=>setFile(e.target.files)} />
                        {/*<div className={S.image}>
                            <img src={'#'} />
                        </div>*/}
                        <button className={s.submitPhotoBtn} type="submit">
                            <p>Изменить фото</p>
                        </button>
                    </div>
                </form>
                <div>
                    <form className={s.rightContainer} onSubmit={e=>{
                        e.preventDefault();
                        api.setName(name, surname).then(v=>{
                            if(v.ok)
                                api.getUserInfo().then(u=>dispatch(setUser(u)))
                        });
                    }}>
                        <div className={s.nameContainer}>
                            <div className={s.editField}>
                                <p>Имя:</p>
                                <input className={s.input} placeholder={user?.name} onInput={e=>setName(e.target.value)}/>
                            </div>
                            <div className={s.editField}>
                                <p>Фамилия:</p>
                                <input className={s.input} placeholder={user?.surname} onInput={e=>setSurname(e.target.value)}/>
                            </div>
                        </div>
                        <button className={s.submitBtn} type="submit">
                            <p>Изменить имя и фамилию</p>
                        </button>
                    </form>
                    <form className={s.rightContainer} onSubmit={e=>{
                        e.preventDefault();
                        api.setStatus(status).then(v=>{
                            if(v.ok)
                                api.getUserInfo().then(u=>dispatch(setUser(u)))
                        });
                    }}>
                        <div className={s.editField}>
                            <p>О себе:</p>
                            <textarea className={s.textArea} placeholder={user?.status} onInput={e=>setStatus(e.target.value)}/>
                        </div>
                        <button className={s.submitBtn} type="submit">
                            <p>Изменить о себе</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default EditProfile;