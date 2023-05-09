import s from './MyPoety.module.css'
import Poems from './Poems/Poems';
import YearsAndNewPoem from './YearsAndNewPoem/YearsAndNewPoem';

const MyPoety = () => {

return (
        <div className={s.componentWrapper}>
           <YearsAndNewPoem />
           <Poems />
        </div>
    );
};

export default MyPoety;