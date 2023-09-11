import React from "react";
import './GameCover.css';

const GameCover = ({image = ''}) => {
  console.log(image);
  return (
    <div className="game-cover" style={{backgroundImage: `url(${image})`}} />
  )
}

export default GameCover;
