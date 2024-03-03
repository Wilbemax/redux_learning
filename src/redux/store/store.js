// store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../slice/favorite/favorites.slice';

export const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
	devTools: true,
});
