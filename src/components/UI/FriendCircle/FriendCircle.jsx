
import { useNavigate } from 'react-router-dom';
import s from './FriendCircle.module.css'

export default function FriendCircle(props) {
    const history = useNavigate();
    return (
        <div className={s.componentWrapper} onClick={()=>history(`/profile/${props.profileId}`)}>
            <img src={`/api/avatars/${props.friendAva}`} alt="img"></img>
        </div>
    );
};