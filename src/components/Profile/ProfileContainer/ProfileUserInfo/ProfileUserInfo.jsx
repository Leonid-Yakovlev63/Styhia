import ProfilePageCover from './ProfilePageCover/ProfilePageCover';
import s from './ProfileUserInfo.module.css'
import ProfileDescriptonBlock from './ProfileDescriptionBlock/ProfileDescriptionBlock';


const ProfileUserInfo = (props) => {

return (
        <div className={s.componentWrapper}>
            <ProfilePageCover ava = {props.userInfo.ava}/>
            
            <ProfileDescriptonBlock userInfo = {props.userInfo}/>
        </div>
    );
};

export default ProfileUserInfo;