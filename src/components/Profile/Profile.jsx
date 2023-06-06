import { useSelector } from 'react-redux';
import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Profile.module.css'
import ProfileContainer from './ProfileContainer/ProfileContainer';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../../service/api';

const Profile = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const params = useParams();
    let [userInfo, setUserInfo] = useState({});
    const loaded = useSelector(state=>!state.loading);
    let myProfile = ["/","/profile","/profile/"].includes(location.pathname)||params?.id==props?.userInfo?.id;
    useEffect(()=>{
        if(!params?.id) return;
        api.getUserInfoById(params.id).then(v=>{
            if(!v?.role) return setUserInfo({notFound:true});
            setUserInfo(v)
        }).catch(e=>setUserInfo({notFound:true}))
    },[]);
    if(myProfile){
        if(loaded&&!props.userInfo?.role==="NEW") return history("/confirm", {replace: true, relative:'path'});
        if(loaded&&!props.userInfo?.role) return history("/login", {replace: true, relative:'path'});
    }
    if(userInfo?.notFound) return (
        <PageTitle title='Not Found' />
    )
    // Запрос
    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Профиль"/>
            <ProfileContainer userInfo = {myProfile?props.userInfo:userInfo} myProfile = {myProfile}/>
        </div>
    );
};

export default Profile;