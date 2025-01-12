import { useDispatch } from 'react-redux';
import DataFetcher from './components/DataFetcher';
import { fetchRecipeData } from './features/dataSlice'; 
import { RootState, AppDispatch } from './store/store';  

function App() {
  const dispatch = useDispatch<AppDispatch>();  

  return (
    <div className="App">
      <h1>Recipe List</h1>
      <DataFetcher
        fetchDataAction={() => dispatch(fetchRecipeData())} 
        dataSelector={(state: RootState) => state.data.recipes}
      />
    </div>
  );
}

export default App;





