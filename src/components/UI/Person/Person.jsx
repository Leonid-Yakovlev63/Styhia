import React, { useState } from "react";
import s from "./Person.module.css";
const Person = (props) => {

 
    const [userInfo] = useState({
        userName: "Леонид Яковлев",
        emoji:"😼",
        ava: "https://sun9-48.userapi.com/impg/K64I4tQHyXhvQ1GpLjh5q4brUxemdXLAhvMgsw/3RCc0KC5s1o.jpg?size=720x711&quality=96&sign=c1dab7b20f3df554cf82b5a818bf8212&type=album",
        level: "Разработчик Стихии",
        status:"В поисках вдохновения"
    });

  return (
    <div className={s.container}>
                <div className={s.aboutUser}>
                    <div className={s.ava}>
                        <img src={userInfo.ava}/>
                    </div>
                    <div className={s.textInfo}>
                        <p>{userInfo.userName}</p>
                    </div>
                </div>
            </div>
  );
};

export default Person;
