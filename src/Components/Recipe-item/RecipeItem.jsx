import { useAction } from '../../hooks/useAction';
import classes from './RecipeItem.module.css';
import { useSelector,  } from 'react-redux';

export default function RecipeItem({ recipe }) {
	const favorites = useSelector((state) => state.favorites);
	const isExist = favorites.some((r) => r.id === recipe.id);

	const {toggleFavorites} = useAction()
	console.log(favorites);
	return (
		<div className={classes.card}>
			<h4>{recipe.name}</h4>

			<button onClick={() => toggleFavorites(recipe)}>
				{isExist ? 'Remove ' : 'Add to'}
				favorites
			</button>
		</div>
	);
}
