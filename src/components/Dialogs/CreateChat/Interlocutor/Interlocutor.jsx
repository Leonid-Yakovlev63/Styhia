import {React} from 'react';
import s from './Interlocutor.module.css';


const Interlocutor = ({data, f}) => {

    return(
        <div className={s.componentWrapper}>
            <input
                id={`selected_${data.id}`}
                className={s.checkBox}
                type='checkbox'
                onChange={e=>f(data.id, e.currentTarget.checked)}
            />
            <label for={`selected_${data.id}`} className={s.name}>
                <p>{data.name} {data.surname}</p>
            </label>
        </div>
    );
};

export default Interlocutor;