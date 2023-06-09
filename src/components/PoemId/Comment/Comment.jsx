import React from 'react'
import AuthorBlock from '../../Poem/AuthorBlock/AuthorBlock'
import s from './Comment.module.css';
import { useSelector } from 'react-redux';

export default function Comment({data}) {
    const id = useSelector(state=>state.userInfo?.id);
    console.log(id)
    return (
        <div className={s.componentWrapper}>
            <AuthorBlock user={data.author} date={data.createdAt} comment={data.id} deleteId={data?.author?.id==id?data.id:undefined}/>
            <div className={s.mainBlock}>
                <div className={s.text}>
                    {data.text}
                </div>
            </div>
        </div>
    )
}
