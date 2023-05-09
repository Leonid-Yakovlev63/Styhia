
import s from './ProfileFriends.module.css'
import { useState } from "react";
import Friend from './Friend/Friend';



const ProfileFriends = () => {


    const [friendsNew] = useState([
        {id : 1, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'},
        {id : 2, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'},
        {id : 3, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'},
        {id : 4, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'},
        {id : 5, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'},
        {id : 6, friendAva : 'https://sun9-28.userapi.com/impg/wH_IFVbF9P1Mn4EoY1g368BUFZNguyozEj9C2Q/BfN3JkSkNN0.jpg?size=1620x2160&quality=95&sign=5cafa217ed136bff51c48d2dab23e36e&type=album'}
    ]);

    let friendsList = friendsNew.map(f => <Friend friendAva = {f.friendAva}/>    );
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