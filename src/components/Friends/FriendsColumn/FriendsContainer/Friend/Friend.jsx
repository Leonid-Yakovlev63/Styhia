
import s from "./Friend.module.css";
const Friend = (props) => {

  return (
    <div className={s.container}>
                <div className={s.aboutUser}>
                    <div className={s.ava}>
                        <img src={props.ava}/>
                    </div>
                    <div className={s.textInfo}>
                        <h3>{props.friendName}</h3>
                        <h4>{props.friendInfo}</h4>
                    </div>
                </div>
            </div>
  );
};

export default Friend;
