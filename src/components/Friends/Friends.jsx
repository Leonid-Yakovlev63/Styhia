import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Friends.module.css'
import SearchBar from './SearchBar/SearchBar';

const Friends = (props) => {

return (
        <div className={s.componentWrapper}>
           <PageTitle title = {"Друзья"}/>
           <SearchBar />   
        </div>
    );
};

export default Friends;