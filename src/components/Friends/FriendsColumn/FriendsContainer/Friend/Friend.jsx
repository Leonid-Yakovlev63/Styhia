
import { useNavigate } from "react-router-dom";
import s from "./Friend.module.css";
import { IconUserPlus, IconUserX, IconX, IconCheck } from "@tabler/icons-react";
import api from "../../../../../service/api";
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
                <div className={s.textInfo} onClick={()=>history(`/profile/${data.id}`)}>
                    <h3>{data.name+" "+data.surname}</h3>
                    <h4>{(data.status?.length>26?data.status.substring(0,23)+"...":data.status)??""}</h4>
                </div>
                {props.invites?<IconUserPlus className={s.invite} size={'2rem'} onClick={()=>api.sendFriendRequest(data.id).then(props.refresh)} />:undefined}
                {props.confirm?<IconCheck className={s.invite} size={'2rem'} onClick={()=>api.confirmFriendRequest(data.id).then(props.refresh)} />:undefined}
                {props.delete?<IconUserX className={s.invite} size={'2rem'} onClick={()=>api.deleteFriend(data.id).then(props.refresh)} />:undefined}
                {props.remove?<IconX className={s.invite} size={'2rem'} onClick={()=>api.deleteFriendRequest(data.id).then(props.refresh)} />:undefined}
            </div>
        </div>
    );
};

export default Friend;
