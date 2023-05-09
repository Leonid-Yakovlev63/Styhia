import React, { useState } from 'react';
import s from './LikeButton.module.css';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`${s['like-button']} ${liked ? s.liked : ''}`}
      onClick={handleClick}
    >
      {liked ? '🤍' : 'Like'}
    </button>
  );
}

export default LikeButton;
