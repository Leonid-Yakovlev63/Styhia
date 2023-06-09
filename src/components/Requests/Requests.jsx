import React, { useEffect, useState } from 'react'
import PageTitle from '../UI/PageTitle/PageTitle'
import FriendsColumn from '../Friends/FriendsColumn/FriendsColumn'
import api from '../../service/api';
import s from './Requests.module.css'

export default function Requests() {
    let [requests, setRequests] = useState([]);
    let [myRequests, setMyRequests] = useState([]);
    useEffect(()=>{
        api.getFriendRequests().then(v=>setRequests(v));
        api.getMyFriendRequests().then(v=>setMyRequests(v));
    },[]);
    return (
        <div>
            <PageTitle title = {"Заявки в друзья"}/>
            <div className={s.gridContainer}>
                <FriendsColumn title = {'Мне'} friends={requests} confirm/>
                <FriendsColumn title = {'Мои'} friends={myRequests} remove/>
           `</div>
        </div>
    )
}
