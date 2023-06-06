import { useEffect, useState } from 'react';
import PageTitle from '../UI/PageTitle/PageTitle';

import s from './Friends.module.css'
import FriendsColumn from './FriendsColumn/FriendsColumn';
import SearchBar from './SearchBar/SearchBar';
import api from '../../service/api';
import { useParams } from 'react-router-dom';

const Friends = (props) => {
    const params = useParams();
    let [friends, setFriends] = useState([]);
    let [search, setSearch] = useState([]);
    useEffect(()=>{
        if(params?.id)
            api.getUserFriendsById(params.id).then(v=>setFriends(v));
        else
            api.getUserFriends().then(v=>setFriends(v));
    },[])
    return (
        <div className={s.componentWrapper}>
           <PageTitle title = {"Друзья"}/>
           <SearchBar />
           <div className={s.gridContainer}>
                <FriendsColumn title = {'Мои друзья'} friends={friends}/>
                <FriendsColumn title = {'Результат поиска'} friends={search}/>
           </div>
           
        </div>
    );
};

export default Friends;
