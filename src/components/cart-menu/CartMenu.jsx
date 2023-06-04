import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { calcTotalPrice } from "../utils";
import './CartMenu.css';

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {
          items.length > 0
            ? items.map(game => <CartItem 
                key={game.title} 
                title={game.title} 
                price={game.price} 
                id={game.id}
              />)
            : 'Cart empty'
        }
      </div>
      {
        items.length > 0 &&
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
            <Button 
              type="primary" 
              size='m' 
              onClick={onClick}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      }
    </div>
  )
}

export default CartMenu;
