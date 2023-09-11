import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/reducer";
import gamesReducer from "../redux/games/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer,
  }
})
