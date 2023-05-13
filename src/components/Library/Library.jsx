import SearchBar from '../Friends/SearchBar/SearchBar';
import Lent from '../Lent/Lent';
import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Library.module.css'
import LibraryFriends from './LibraryFriends/LibraryFriends';

const Library = (props) => {

return (
        <div className={s.componentWrapper}>
           <div className={s.libraryFriends}>
            <LibraryFriends friends={props.friends} />
           </div>
           <div>
            <PageTitle title = {"Библиотека"}/>
            <SearchBar />
            
           </div>
        </div>
    );
};

export default Library;