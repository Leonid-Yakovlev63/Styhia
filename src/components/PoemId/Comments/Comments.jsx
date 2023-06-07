import React from 'react';
import s from './Comments.module.css';
import Comment from '../Comment/Comment';

export default function Comments({data, post}) {
    if(!post) return;
    return (
        <div className={s.componentWrapper}>
            <div className={s.send}>
                <input style={{margin:0}} type="text" />
                <button>Отправить</button>
            </div>
            <div className={s.main}>
                {data.map(v=><Comment data={v} post={post} />)}
            </div>
        </div>
    )
}
