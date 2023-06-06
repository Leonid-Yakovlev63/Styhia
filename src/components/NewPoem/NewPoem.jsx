import React, { useState } from 'react'
import api from '../../service/api';

export default function NewPoem() {
    let [title, setTitle] = useState("");
    let [text, setText] = useState("");
    let [files, setFiles] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("files", files);
        if(files)
            api.uploadFiles(formData).then(v=>v.json())
            .then(v=>api.sendPost(title, text, v))
        else
            api.sendPost(title, text, null).then(console.log);
    }

    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <input type="text" placeholder='Заголовок' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='текст' onChange={(e)=>setText(e.target.value)}></textarea>
            <input id='files' type="file" multiple onChange={(e)=>setFiles(e.target.files)}/>
            <button onClick={()=>{setFiles(null);document.getElementById("files").value=""}}>удалить</button>
            <button>Отправить</button>
        </form>
    )
}
