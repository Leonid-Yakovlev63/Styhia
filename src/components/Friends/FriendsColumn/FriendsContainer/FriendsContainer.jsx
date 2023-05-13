import Friend from './Friend/Friend';

import s from './FriendsContainer.module.css'


const FriendsContainer = (props) => {


    let friendsList = props.friends.map( f => <Friend ava = {f.ava} friendName = {f.friendName} friendInfo = {f.friendInfo}/>);
return (
        <div className={s.componentWrapper}>
            {friendsList}
        </div>
    );

};

export default FriendsContainer;