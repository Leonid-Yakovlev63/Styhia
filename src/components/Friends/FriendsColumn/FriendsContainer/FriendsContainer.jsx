import Friend from './Friend/Friend';

import s from './FriendsContainer.module.css'


const FriendsContainer = (props) => {


    let friendsList = props.friends?.map( f => <Friend data={f} />);
return (
        <div className={s.componentWrapper}>
            {friendsList}
        </div>
    );

};

export default FriendsContainer;