import React, { useState } from 'react';
import s from './LikeButton.module.css';

function LikeButton({liked, likes=undefined, onClick}) {

  return (
    <div className={s.main}>
      <button
        className={`${s['like-button']} ${liked ? s.liked : ''}`}
        onClick={onClick}
      >
        {liked ? '🤍' : 'Like'}
      </button>
      <div className={s.counter}>{likes!==undefined?likes:undefined}</div>
    </div>
  );
}

export default LikeButton;
