import ProfilePageCover from './ProfilePageCover/ProfilePageCover';
import s from './ProfileUserInfo.module.css'
import ProfileDescriptionBlock from './ProfileDescriptionBlock/ProfileDescriptionBlock';


const ProfileUserInfo = (props) => {

return (
        <div className={s.componentWrapper}>
            <ProfilePageCover ava = {"/api/avatars/"+props.userInfo.avatar}/>
            
            <ProfileDescriptionBlock userInfo = {props.userInfo} myProfile = {props.myProfile}/>
        </div>
    );
};

export default ProfileUserInfo;