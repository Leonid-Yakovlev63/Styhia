
import { useNavigate, useParams } from 'react-router-dom';
import s from './ProfilePoetys.module.css'
import { useSelector } from 'react-redux';

const ProfilePoetys = () => {
    const history = useNavigate();
    const params = useParams();
    const id = useSelector(state=>state?.userInfo?.id);
    return (
        <div className={s.componentWrapper} onClick={()=>history(`/poems/${params?.id?params.id:id}`)}>
            <div className={s.componentTitle}>
                <h2>Стихи</h2>
            </div>
            <div className={s.componentContent}>

            </div>
        </div>
    );
};

export default ProfilePoetys;