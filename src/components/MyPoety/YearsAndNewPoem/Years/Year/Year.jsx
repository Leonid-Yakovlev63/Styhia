import s from './Year.module.css'
const Year = (props) => {

return (
        <button className={s.button}>
            {props.year}
        </button>
    );
};

export default Year;