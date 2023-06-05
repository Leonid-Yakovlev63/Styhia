

import s from './ProfileDescriptionBlock.module.css'
import Edit from '../../../../UI/Edit/Edit'
const ProfileDescriptionBlock = (props) => {

return (
        <div className={s.componentWrapper}>
            <div className={s.textInfoContainer}>
                <div className={s.textInfo}>
                    <h1>{`${props.userInfo.name} ${props.userInfo.surname}`}</h1>
                    {props.myProfile?<Edit />:undefined}
                </div>
                <div className={s.textInfo}>
                    <h3>{props.userInfo.level}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescriptionBlock;