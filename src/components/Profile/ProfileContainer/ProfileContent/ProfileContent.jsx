
import ProfileAboutMe from './ProfileAboutMe/ProfileAboutMe';
import s from './ProfileContent.module.css'
import ProfileFriends from './ProfileFriends/ProfileFriends';
import ProfilePoetys from './ProfilePoetys/ProfilePoetys';

const ProfileContent = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.firstContainer}>
                <ProfileAboutMe />
            </div>
            <div className={s.secondContainer}>
                <ProfileFriends friends={props.friends}/>
                <ProfilePoetys />
            </div>
        </div>
    );
};

export default ProfileContent;