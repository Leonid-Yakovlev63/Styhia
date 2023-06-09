import React, { useEffect, useState } from 'react'
import s from './NewPoem.module.css'
import api from '../../service/api';
import PageTitle from '.././UI/PageTitle/PageTitle';

export default function NewPoem() {
    let [title, setTitle] = useState("");
    let [text, setText] = useState("");
    let [files, setFiles] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if(files) for(let file of files)
            formData.append("files", file, file.name);
        if(files)
            api.uploadFiles(formData).then(v=>v.json())
            .then(v=>api.sendPost(title, text, v))
        else
            api.sendPost(title, text, null);
    }

    return (
        <>
        <PageTitle title={!title ? 'Новый стих' : title}/>
        <form onSubmit={e=>handleSubmit(e)} className={s.container}>
            <input className={s.input} type="text" placeholder='Заголовок' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea className={s.textarea} placeholder='Текст' onChange={(e)=>setText(e.target.value)}></textarea>
            <input className={s.fileInput} id='files' type="file" multiple onChange={(e)=>setFiles(e.target.files)}/>
            <div className={s.buttons}>
                <button className={s.button} id={s.two} ><p>Отправить</p></button>
                <button className={s.button} id={s.one} onClick={()=>{setFiles(null);document.getElementById("files").value=""}}><p>Очистить</p></button>
            </div>
        </form>
        </>
    )
}
