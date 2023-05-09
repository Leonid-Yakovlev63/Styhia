import s from './PoemTitle.module.css'


const PoemTitle = (props) => {

return (
        <div className={s.componentWrapper}>
            {props.poemTitle}
        </div>
    );
};

export default PoemTitle;