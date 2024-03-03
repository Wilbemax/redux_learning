import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favorites = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, action) => {
			const recipe = action.payload;
			const isExist = state.some((r) => r.id === recipe.id);
			if (isExist) {
				// Удаляем рецепт из избранного
				return state.filter((r) => r.id !== recipe.id);
			} else {
				// Добавляем рецепт в избранное
				state.push(recipe);
			}
		},
	},
});

// Экспортируем действия и редьюсеры
export const { toggleFavorites } = favorites.actions;
export default favorites.reducer;
