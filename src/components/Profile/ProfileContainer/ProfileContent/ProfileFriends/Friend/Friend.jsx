
import s from './Friend.module.css'

export default function Friend(props) {
    return (
        <div className={s.componentWrapper}>
            <img src={props.friendAva} alt="img"></img>
        </div>
    );
};