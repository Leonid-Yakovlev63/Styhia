import React, { useState } from 'react';
import s from './Comments.module.css';
import Comment from '../Comment/Comment';
import api from '../../../service/api';

export default function Comments({data, post}) {
    let [text, setText] = useState("");
    if(!post) return;
    return (
        <div className={s.componentWrapper}>
            <div className={s.send} onInput={e=>setText(e.target.value)}>
                <input style={{margin:0}} type="text" />
                <button onClick={()=>api.sendComment(post.id, text)}>Отправить</button>
            </div>
            <div className={s.main}>
                {data.map(v=><Comment data={v} />)}
            </div>
        </div>
    )
}
