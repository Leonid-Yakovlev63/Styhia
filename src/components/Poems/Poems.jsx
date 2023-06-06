import { useParams } from 'react-router-dom';
import api from '../../service/api';
import PageTitle from '../UI/PageTitle/PageTitle';
import Poem from '../Poem/Poem';
import s from './Poems.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Poems = (props) => {
    const params = useParams();
    const user = useSelector(state=>state.userInfo);
    let id = user?.id;
    if(params.id) id = params.id;
    const [poems, setPoems] = useState([]);
    useEffect(()=>{
        api.getPostsByUserId(id).then(v=>setPoems(v))
    },[user])
    console.log(poems)
    let poemsList = poems.map( p => <Poem data={p}/>);

    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Стихи" />
            {poemsList}
        </div>
    );
};

export default Poems;