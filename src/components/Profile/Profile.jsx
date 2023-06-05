import { useSelector } from 'react-redux';
import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Profile.module.css'
import ProfileContainer from './ProfileContainer/ProfileContainer';
import { useNavigate, useLocation } from 'react-router-dom';

const Profile = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const loaded = useSelector(state=>!state.loading);
    console.log(location.pathname)
    let myProfile = ["/","/profile"].includes(location.pathname);
    if(myProfile){
        if(loaded&&!props.userInfo?.role==="NEW") return history("confirm", {replace: true, relative:'path'});
        if(loaded&&!props.userInfo?.role) return history("login", {replace: true, relative:'path'});
    }else{
        props.userInfo = null;

    }
    // Запрос
    return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Профиль"/>
            <ProfileContainer userInfo = {props.userInfo}/>
            {myProfile?undefined:<button onClick={()=>null}></button>}
        </div>
    );
};

export default Profile;