import NewPoem from './NewPoem/NewPoem';
import Years from './Years/Years';
import s from './YearsAndNewPoem.module.css'

const YearsAndNewPoem = (props) => {

return (
        <div className={s.componentWrapper}>
             <NewPoem />
             <Years />
        </div>
    );
};

export default YearsAndNewPoem;