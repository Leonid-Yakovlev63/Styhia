import React, { useState } from 'react';
import s from './DislikeButton.module.css';
import { IconHeartBroken } from '@tabler/icons-react';

function DislikeButton({disliked, dislikes=undefined, onClick}) {
  console.log(dislikes)
  return (
    <div className={s.main}>
      <button
        className={`${s['dislike-button']} ${disliked ? s.disliked : ''}`}
        onClick={onClick}
      >
        {disliked ? <IconHeartBroken /> : 'Dislike'}
      </button>
      <div className={s.counter}>{dislikes!==undefined?dislikes:undefined}</div>
    </div>
  );
}

export default DislikeButton;
