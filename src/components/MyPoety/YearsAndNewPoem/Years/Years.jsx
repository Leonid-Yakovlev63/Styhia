import Year from './Year/Year';
import s from './Years.module.css'
import { useState } from 'react';
const Years = (props) => {
    const [years] = useState([
    {year : '2023'},
    {year : '2022'},
    {year : '2021'},
    {year : '2020'},
    {year : '2019'}]);

    let yearBtns = years.map( y => <Year year={y.year}/>);
return (
        <div className={s.componentWrapper}>
             {yearBtns}
        </div>
    );
};

export default Years;