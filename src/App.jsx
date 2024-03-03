import './App.css';
import RecipeItem from './Components/Recipe-item/RecipeItem';

function App() {
	return (
		<>
			<RecipeItem
				recipe={{
					id: 1,
					name: 'Recipe1',
				}}
			/>
			<RecipeItem
				recipe={{
					id: 2,
					name: 'Recipe2',
				}}
			/>
			<RecipeItem
				recipe={{
					id: 3,
					name: 'Recipe3',
				}}
			/>
		</>
	);
}

export default App;
