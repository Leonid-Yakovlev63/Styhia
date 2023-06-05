import { useNavigate } from 'react-router-dom';
import s from './Edit.module.css';
import { IconPencil } from '@tabler/icons-react'

const Edit = (props) => {
    const history = useNavigate();
    return (
        <button className={s.edit} onClick={()=>history("/edit", {replace: true, relative:'path'})}>
            <IconPencil />
        </button>
    );
};

export default Edit;