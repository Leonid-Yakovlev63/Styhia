import React, { useEffect, useState } from 'react'
import s from './AuthorBlock.module.css'
import { useNavigate } from 'react-router-dom';
import { IconTrash } from '@tabler/icons-react';
import api from '../../../service/api';
import { useSelector } from 'react-redux';
import LikeButton from '../LikeBtn/LikeButton';
import DislikeButton from '../DislikeBtn/DislikeButton';

export default function AuthorBlock(props) {
  /**
   * @type {{id:number,name:string,surname:string,avatar:number}}
   */
  const data = props.user;
  const auth = useSelector(state=>state.userInfo!=="NEW"&&state.userInfo&&!props.comment);
  const history = useNavigate();
  let [react, setReact] = useState({
    react: props.react,
    likes: props.likes,
    dislikes: props.dislikes
  });

  const reloadState = async (type) => {
    let likes = await api.getLikes(props.postId).catch(v=>0);
    let dislikes = await api.getDislike(props.postId).catch(v=>0);
    setReact({
      react: type,
      likes,
      dislikes
    });
  }

  const setLike = () => {
    console.log(props)
    if(react.react==="LIKE")
      api.removeReact(props.postId).then(v=>{
        if(v.ok)
          reloadState("NONE");
      })
    else
      api.setLike(props.postId).then(v=>{
        if(v.ok)
          reloadState("LIKE");
      })
  }

  const setDislike = () => {
    console.log(props)
    if(react.react==="DISLIKE")
      api.removeReact(props.postId).then(v=>{
        if(v.ok)
          reloadState("NONE");
      })
    else
      api.setDislike(props.postId).then(v=>{
        if(v.ok)
          reloadState("DISLIKE");
      })
  }

  return (
    <div className={s.main}>
      <img className={s.image} src={`/api/avatars/${data?.avatar??null}`} onClick={()=>history(`/profile/${data.id}`)}/>
      <div className={s.author}>
        <div>
          <div onClick={()=>history(`/profile/${data.id}`)}>
            {`${data.name} ${data.surname}`}
          </div>
          <div className={s.date}>
            {new Date(props.date).toLocaleString()}
          </div>
        </div>
      </div>
      {auth?<LikeButton liked={react.react==="LIKE"} likes={react.likes} onClick={()=>setLike()} />:undefined}
      {auth?<DislikeButton disliked={react.react==="DISLIKE"} dislikes={react.dislikes} onClick={()=>setDislike()} />:undefined}
      <div style={{display:"flex", flex:"1"}}/>
      {props.deleteId?<IconTrash cursor={"pointer"} onClick={()=>props.comment!==undefined?api.removeComment(data.comment):api.removePost(props.deleteId).then(()=>props.reload())} />:undefined}
    </div>
  )
}
