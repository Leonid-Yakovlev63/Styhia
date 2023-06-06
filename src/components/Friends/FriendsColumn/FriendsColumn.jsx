
import PageTitle from '../../UI/PageTitle/PageTitle';
import s from './FriendsColumn.module.css'
import FriendsContainer from './FriendsContainer/FriendsContainer';


const FriendsColumn = (props) => {
    
return (
    <div className={s.componentWrapper}>
        <PageTitle title = {props.title} />
        <FriendsContainer friends = {props.friends}/>
    </div>
    );
};

export default FriendsColumn;