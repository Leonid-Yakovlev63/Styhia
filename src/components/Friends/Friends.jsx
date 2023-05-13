import PageTitle from '../UI/PageTitle/PageTitle';

import s from './Friends.module.css'
import FriendsColumn from './FriendsColumn/FriendsColumn';
import SearchBar from './SearchBar/SearchBar';

const Friends = (props) => {
   
return (
        <div className={s.componentWrapper}>
           <PageTitle title = {"Друзья"}/>
           <SearchBar />
           <div className={s.gridContainer}>
                <FriendsColumn title = {'Мои друзья'} friends={props.friends}/>
                <FriendsColumn title = {'Рекомендованные'} friends={props.recFriends}/>
           </div>
           
        </div>
    );
};

export default Friends;
