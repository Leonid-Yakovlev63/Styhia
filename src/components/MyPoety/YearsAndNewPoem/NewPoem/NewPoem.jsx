import s from './NewPoem.module.css'

const NewPoem = (props) => {

return (
        <button className={s.button}>
             <p>Новый стих</p>
        </button>
    );
};

export default NewPoem;