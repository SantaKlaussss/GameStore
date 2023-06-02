import React from "react";
import './game-page.css';
import {useSelector} from 'react-redux';
import GameCover from '../../components/game-cover/GameCover';
import GameBuy from '../../components/game-buy/GameBuy';
import GameGenre from '../../components/game-genre/GameGenre';

const GamePage = () => {
  const game = useSelector(state => state.games.currentGame);

  if(!game) return null
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe src={game.video} width='90%' height='400px' title='Youtube Video Player'>
          </iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image}/>
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки этого продукта:</p>
          {game.genres.map((genre) => <GameGenre key={genre} genre={genre}/>)}
          <div className="pame-page__by-game">
            <GameBuy game={game}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
