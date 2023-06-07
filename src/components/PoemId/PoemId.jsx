import { useNavigate, useParams } from 'react-router-dom';
import api from '../../service/api';
import PageTitle from '../UI/PageTitle/PageTitle';
import Poem from '../Poem/Poem';
import s from './PoemId.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Comments from './Comments/Comments';

const Poems = (props) => {
    const params = useParams();
    const user = useSelector(state=>state.userInfo);
    let id = params.id;
    const [poem, setPoem] = useState(null);
    const [comments, setComments] = useState([]);
    const reload = () => api.getComm(id).then(v=>setComments(v));
    if(id===undefined) return <PageTitle title="Пост не найден" />
    useEffect(()=>{
        api.getPostById(id).then(v=>setPoem(v));
        api.getCommentsByPostId(id).then(v=>setComments(v));
    },[user])

    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Стих" />
            <Poem data={poem} postPage />
            {poem?.id!==null?<Comments data = {comments} post={poem} OnReload = {reload} />:undefined}
        </div>
    );
};

export default Poems;