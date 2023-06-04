import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import GameCover from "../game-cover/GameCover";
import GameBuy from "../game-buy/GameBuy";
import GameGenre from "../game-genre/GameGenre";
import { setCurrentGame } from "../../redux/games/reducer";
import './GameItem.css';
import Pagination from "../pagination/pagination";

const GameItem = ({ game }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  }

  const onPageChanged = (pageNumber) => {

  }

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__tile">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}

export default GameItem;
