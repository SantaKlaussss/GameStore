import React from 'react'
import './order-item.css'
import { useDispatch } from 'react-redux'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import GameCover from '../game-cover/GameCover'
import { deleteItemFromCart } from '../../redux/cart/reducer';

const OrderItem = ({game}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  };

  return (
    <div className='order-item'>
      <div className="order-item__cover">
        <GameCover image={game.image}/>
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle size={25} onClick={handleClick} className="order-item__delete-icon"/> 
      </div>
    </div>
  )
}

export default OrderItem;
