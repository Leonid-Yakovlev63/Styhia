

import s from './ProfileDescriptionBlock.module.css'

const ProfileDescriptonBlock = () => {

return (
        <div className={s.componentWrapper}>
            <div className={s.textInfoContainer}>
                <div className={s.textInfo}>
                    <h1>Яковлев Леонид</h1>
                </div>
                <div className={s.textInfo}>
                    <h3>Разработчик Стихии</h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescriptonBlock;