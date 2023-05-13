import s from "./Person.module.css";
const Person = (props) => {


  return (
    <div className={s.container}>
                <div className={s.aboutUser}>
                    <div className={s.ava}>
                        <img src={props.userInfo.ava}/>
                    </div>
                    <div className={s.textInfo}>
                        <p>{props.userInfo.userName}</p>
                    </div>
                </div>
            </div>
  );
};

export default Person;
