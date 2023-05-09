
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import s from './ProfilePageCover.module.css'

const ProfilePageCover = () => {

return (
        <div className={s.componentWrapper}>
            <div className={s.avatar}>
                <ProfileAvatar />
            </div>
        </div>
    );
};

export default ProfilePageCover;