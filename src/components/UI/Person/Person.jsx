import s from "./Person.module.css";
const Person = (props) => {


  return (
    <div className={s.container}>
                <div className={s.aboutUser}>
                    <div className={s.ava}>
                        <img src={"/api/avatars/"+props.userInfo.avatar}/>
                    </div>
                    <div className={s.textInfo}>
                        <p>{`${props.userInfo.name} ${props.userInfo.surname}`}</p>
                    </div>
                </div>
            </div>
  );
};

export default Person;
