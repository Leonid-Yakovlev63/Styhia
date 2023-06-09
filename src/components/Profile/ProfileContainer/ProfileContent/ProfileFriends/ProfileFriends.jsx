
import s from './ProfileFriends.module.css'
import FriendCircle from '../../../../UI/FriendCircle/FriendCircle';
import { useEffect, useState } from 'react';
import api from '../../../../../service/api';
import { useParams } from 'react-router-dom';

const ProfileFriends = (props) => {
    const params = useParams();
    let [friends, setFriends] = useState(null);
    useEffect(()=>{
        if(!params?.id)
            api.getUserFriends().then(v=>setFriends(v?.length?v.slice(0,6):null));
        else
            api.getUserFriendsById(params.id).then(v=>setFriends(v?.length?v.slice(0,6):null));
    },[params]);
    let friendsList = friends?.map(f => <FriendCircle friendAva={f.avatar} profileId={f.id} />);


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