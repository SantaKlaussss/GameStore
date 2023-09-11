import { createSlice } from '@reduxjs/toolkit';
import { GAMES } from '../../Pages/home-page/HomePage';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null,
    pageSize: 3,
    currentPage: 1,
    totalGameCount: GAMES.length,
    portionSize: 3,
  },
  reducers: {

    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setCurrentGame } = gamesSlice.actions;
export const { setCurrentPage } = gamesSlice.actions;
export default gamesSlice.reducer;
