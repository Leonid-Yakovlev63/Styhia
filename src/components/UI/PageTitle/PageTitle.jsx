import s from './PageTitle.module.css'

const PageTitle = (props) => {

return (
            <div className={s.title}>
                <h1>{props.title}</h1>
            </div>
    );
};

export default PageTitle;