import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import s from './EditProfile.module.css'

const EditProfile = (props) => {
    const user = useSelector(state=>state.userInfo);
    return (
        <form className={s.componentWrapper}>
            <PageTitle title='Редактировать профиль'/>
            <div className={s.editProfile}>
                <div className={s.NewPhoto}>
                    <input type="file" name='photo' multiple />
                </div>
                <div className={s.editField}>
                    <p>Имя:</p>
                    <input placeholder={user?.name}/>
                </div>
                <div className={s.editField}>
                    <p>Фамилия:</p>
                    <input placeholder={user?.surname}/>
                </div>
                <div className={s.editField}>
                    <p>О себе:</p>
                    <input placeholder={user?.status}/>
                </div>
            </div>
            <input type="submit" value="Отправить" />
        </form>
    );
};

export default EditProfile;