import s from './PoemBody.module.css'


const PoemBody = (props) => {

return (
        <div className={s.componentWrapper}>
            {props.poemText}
        </div>
    );
};

export default PoemBody;