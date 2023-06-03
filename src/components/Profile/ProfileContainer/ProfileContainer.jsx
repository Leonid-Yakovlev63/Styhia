
import s from './ProfileContainer.module.css'
import ProfileContent from './ProfileContent/ProfileContent';

import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo';

const ProfileContainer = (props) => {

return (
        <div className={s.componentWrapper}>
            <ProfileUserInfo userInfo = {props.userInfo}/>
            <ProfileContent userInfo = {props.userInfo}/>
        </div>
    );
};

export default ProfileContainer;