import Friend from './Friend/Friend';

import s from './FriendsContainer.module.css'


const FriendsContainer = (props) => {

    let friendsList = props.friends?.map( f => <Friend data={f} invites={props.invites} delete={props.delete} confirm={props.confirm} remove={props.remove} refresh={props.refresh} />);
    return (
        <div className={s.componentWrapper}>
            {friendsList}
        </div>
    );

};

export default FriendsContainer;