import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { toggleFavorites } from '../redux/slice/favorite/favorites.slice';

const rootActions = {
	toggleFavorites,
};

export const useAction = () => {
	const dispatch = useDispatch();
	return useMemo(() => {
		bindActionCreators(rootActions, dispatch);
	}, [dispatch]);
};
