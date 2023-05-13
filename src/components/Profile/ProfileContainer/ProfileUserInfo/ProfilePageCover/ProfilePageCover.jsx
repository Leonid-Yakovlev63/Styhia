
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import s from './ProfilePageCover.module.css'

const ProfilePageCover = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.avatar}>
                <ProfileAvatar ava = {props.ava}/>
            </div>
        </div>
    );
};

export default ProfilePageCover;