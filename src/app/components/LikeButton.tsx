"use client";
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';


const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <button
      onClick={ handleClick }
      className="flex items-center space-x-2 p-2 text-2xl text-white hover:text-red-500 transition-colors duration-300"
    >
      <FaHeart className={ isLiked ? "text-red-600" : "text-white" } />
      <span className="text-base">{ likes }</span>
    </button>
  );
};

export default LikeButton;