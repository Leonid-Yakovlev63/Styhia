import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Profile.module.css'
import ProfileContainer from './ProfileContainer/ProfileContainer';

const Profile = (props) => {

return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Профиль"/>
            <ProfileContainer friends={props.friends} userInfo = {props.userInfo}/>

        </div>
    );
};

export default Profile;