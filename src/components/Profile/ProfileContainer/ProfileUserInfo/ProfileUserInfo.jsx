import ProfilePageCover from './ProfilePageCover/ProfilePageCover';
import s from './ProfileUserInfo.module.css'
import ProfileDescriptonBlock from './ProfileDescriptionBlock/ProfileDescriptionBlock';


const ProfileUserInfo = () => {

return (
        <div className={s.componentWrapper}>
            <ProfilePageCover />
            
            <ProfileDescriptonBlock />
        </div>
    );
};

export default ProfileUserInfo;