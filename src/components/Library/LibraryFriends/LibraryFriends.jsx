import s from './LibraryFriends.module.css'
import FriendCircle from '../../UI/FriendCircle/FriendCircle';
const LibraryFriends = (props) => {

    let friendsList = props.friends.map(f => <FriendCircle friendAva={f.friendAva} />);

return (
        <div className={s.componentWrapper}>
            {friendsList}
        </div>
    );
};

export default LibraryFriends;