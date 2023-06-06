import { useNavigate, useParams } from 'react-router-dom';
import api from '../../service/api';
import PageTitle from '../UI/PageTitle/PageTitle';
import Poem from '../Poem/Poem';
import s from './Poems.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Poems = (props) => {
    const params = useParams();
    const user = useSelector(state=>state.userInfo);
    const history = useNavigate();
    let id = user?.id;
    if(params.id) id = params.id;
    const my = id==user?.id;
    const [poems, setPoems] = useState([]);
    const reload = () => api.getPostsByUserId(id).then(v=>setPoems(v));
    useEffect(()=>{
        api.getPostsByUserId(id).then(v=>setPoems(v))
    },[user])
    console.log(poems)
    let poemsList = poems.map( p => <Poem data={p} reload={reload}/>);

    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Стихи" />
            {my?<button onClick={()=>history("/newPoem")}>новый</button>:undefined}
            {poemsList}
        </div>
    );
};

export default Poems;