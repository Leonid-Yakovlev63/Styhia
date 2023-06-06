
import { useNavigate } from "react-router-dom";
import s from "./Friend.module.css";
const Friend = (props) => {
    /**
     * @type {{id:number,name:string,surname:string,status:string|null,avatar:number|null,role:string,createdAt}}
     */
    const data = props.data;
    const history = useNavigate();
    return (
        <div className={s.container} key={data.id}>
            <div className={s.aboutUser}>
                <div className={s.ava} onClick={()=>history(`/profile/${data.id}`)}>
                    <img src={`/api/avatars/${data.avatar}`}/>
                </div>
                <div className={s.textInfo}>
                    <h3>{data.name+" "+data.surname}</h3>
                    <h4>{(data.status?.length>16?data.status.substring(0,13)+"...":data.status)??""}</h4>
                </div>
            </div>
        </div>
    );
};

export default Friend;
