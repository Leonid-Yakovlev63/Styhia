import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Library.module.css'

const Library = (props) => {

return (
        <div className={s.componentWrapper}>
           <PageTitle title = {"Библиотека"}/>   
        </div>
    );
};

export default Library;