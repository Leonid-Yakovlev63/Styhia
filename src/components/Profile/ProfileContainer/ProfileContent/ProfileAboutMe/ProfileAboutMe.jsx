
import s from './ProfileAboutMe.module.css'

const ProfileAboutMe = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.aboutMe}>
                <h2>Обо мне</h2>
            </div>
            <h3>{props.userInfo.status??"Тут пока ничего нет. Если вы знакомы с этим человеком посоветуйте ему написать о себе."}</h3>
        </div>
    );
};

export default ProfileAboutMe;