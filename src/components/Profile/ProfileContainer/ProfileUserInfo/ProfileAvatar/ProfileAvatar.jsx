
import s from './ProfileAvatar.module.css'

const ProfileAvatar = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.avatar}>
                <img src={props.ava}></img>
            </div>
        </div>
    );
};

export default ProfileAvatar;