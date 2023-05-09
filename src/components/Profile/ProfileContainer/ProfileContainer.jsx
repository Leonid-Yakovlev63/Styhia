
import s from './ProfileContainer.module.css'
import ProfileContent from './ProfileContent/ProfileContent';

import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo';

const ProfileContainer = () => {

return (
        <div className={s.componentWrapper}>
            <ProfileUserInfo />
            <ProfileContent />
        </div>
    );
};

export default ProfileContainer;