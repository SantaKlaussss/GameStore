import React, { useCallback, useState } from "react";
import { SiAmazons3 } from 'react-icons/si';
import { useSelector } from 'react-redux';
import './CartBlock.css';
import CartMenu from '../../components/cart-menu/CartMenu'
import { calcTotalPrice } from "../utils";
import ItemsInCart from "../items-in-cart/ItemsInCart";
import { useNavigate } from "react-router";

const CartBlock = () => {

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  const history = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history('/order')
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart 
        quantity={items.length} 
      />
      <SiAmazons3 
        size={25} 
        className="cart-block__icon" 
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} 
      />
      {
        totalPrice > 0
          ? <span className="cart-block__total-price"> {totalPrice} руб. </span>
          : null
      }
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

export default CartBlock;
