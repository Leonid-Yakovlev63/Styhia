
import s from './ProfileFriends.module.css'
import FriendCircle from '../../../../UI/FriendCircle/FriendCircle';




const ProfileFriends = (props) => {



    let friendsList = props.friends.slice(0, 6).map(f => <FriendCircle friendAva={f.friendAva} />);


return (
        
        <div className={s.componentWrapper}>
            <div className={s.componentTitle}>
                <h2>Друзья</h2>
            </div>
            <div className={s.friendsList}>
                {friendsList}
            </div>
            
        </div>
    );
};

export default ProfileFriends;