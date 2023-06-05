import PageTitle from '../UI/PageTitle/PageTitle';
import Poem from './Poem/Poem';
import s from './Poems.module.css'
import { useState } from 'react';

const Poems = (props) => {


    const [poems] = useState([
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'},
        {poemTitle : '2023', poemText:'Текст'}
    ]);
    
    let poemsList = poems.map( p => <Poem poemTitle={p.poemTitle} poemText = {p.poemText}/>);

    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Мои стихи" />
            {poemsList}
        </div>
    );
};

export default Poems;