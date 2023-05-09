import React from "react";
import Person from "../../UI/Person/Person";
import s from "./LentPost.module.css";
import LikeButton from "./LikeBtn/LikeButton";

const LentPost = (props) => {
    return (
    <div className={s.LentPost}>
        <div className={s.wrapper}>
            <div className={s.contentWrapper}>
                <div сlassName={s.personInfo} style={{width:"30%"}}>
                    <Person id = {props.id} userName = {props.userName} content = {props.content} title = {props.title} level = {props.level}/>
                </div>
                <div className={s.contentBlock}>
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                </div>
                <div className={s.LikeButtonWrapper}>
                    <LikeButton />
                </div>
            </div>
        </div>  
    </div>
);
};

export default LentPost;