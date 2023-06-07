import React from 'react'
import AuthorBlock from '../../Poem/AuthorBlock/AuthorBlock'
import s from './Comment.module.css';

export default function Comment({post, data}) {
    return (
        <div className={s.componentWrapper}>
            <AuthorBlock user={post.author} date={data.createdAt} comment={data.id}/>
            <div className={s.mainBlock}>
                <div className={s.text}>
                    {data.text}
                </div>
            </div>
        </div>
    )
}
