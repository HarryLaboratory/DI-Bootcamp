import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store'; 
import { Recipe } from '../types/types';

type DataFetcherProps<T> = {
  fetchDataAction: () => void;  
  dataSelector: (state: RootState) => T;
};

function DataFetcher<T>({ fetchDataAction, dataSelector }: DataFetcherProps<T>) {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);

  useEffect(() => {
    fetchDataAction();  
  }, [dispatch, fetchDataAction]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {Array.isArray(data) ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{(item as Recipe).name}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default DataFetcher;



