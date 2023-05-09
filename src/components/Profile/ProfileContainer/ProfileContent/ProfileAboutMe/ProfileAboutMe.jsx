
import s from './ProfileAboutMe.module.css'

const ProfileAboutMe = () => {

return (
        <div className={s.componentWrapper}>
            <div className={s.aboutMe}>
                <h2>Обо мне</h2>
            </div>
            <h3>Пустое вы сердечным ты<br />
Она, обмолвясь, заменила<br />
И все счастливые мечты<br />
В душе влюбленной возбудила.<br />
Пред ней задумчиво стою,<br />
Свести очей с нее нет силы;<br />
И говорю ей: как вы милы!<br />
И мыслю: как тебя люблю!</h3>
        </div>
    );
};

export default ProfileAboutMe;