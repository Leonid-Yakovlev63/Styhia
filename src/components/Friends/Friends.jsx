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
    },[]);
    let refresh = () => {
        if(params?.id)
            api.getUserFriendsById(params.id).then(v=>setFriends(v));
        else
            api.getUserFriends().then(v=>setFriends(v));
    }
    const onSearch = (text) => api.searchFriends(text).then(setSearch);
    return (
        <div className={s.componentWrapper}>
           <PageTitle title = {"Друзья"}/>
           <SearchBar onSearch={onSearch} />
           <div className={s.gridContainer}>
                <FriendsColumn title = {'Мои друзья'} friends={friends} delete refresh={refresh}/>
                <FriendsColumn title = {'Результат поиска'} friends={search} invites refresh={refresh}/>
            </div>
           
        </div>
    );
};

export default Friends;
