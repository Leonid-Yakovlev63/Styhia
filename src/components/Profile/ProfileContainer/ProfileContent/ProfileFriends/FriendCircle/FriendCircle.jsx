
import s from './FriendCircle.module.css'

export default function FriendCircle(props) {
    return (
        <div className={s.componentWrapper}>
            <img src={props.friendAva} alt="img"></img>
        </div>
    );
};