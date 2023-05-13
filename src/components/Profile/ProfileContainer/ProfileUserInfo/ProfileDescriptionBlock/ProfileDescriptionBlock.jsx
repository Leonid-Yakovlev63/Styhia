

import s from './ProfileDescriptionBlock.module.css'

const ProfileDescriptonBlock = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.textInfoContainer}>
                <div className={s.textInfo}>
                    <h1>{props.userInfo.userName}</h1>
                </div>
                <div className={s.textInfo}>
                    <h3>{props.userInfo.level}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescriptonBlock;