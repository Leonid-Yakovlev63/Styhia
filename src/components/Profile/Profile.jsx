import PageTitle from '../UI/PageTitle/PageTitle';
import Registration from '../UI/Registration/Registration';
import s from './Profile.module.css'
import ProfileContainer from './ProfileContainer/ProfileContainer';

const Profile = () => {

return (
        <div className={s.componentWrapper}>
            <PageTitle title = "Профиль"/>
            <ProfileContainer />
            <Registration />
        </div>
    );
};

export default Profile;