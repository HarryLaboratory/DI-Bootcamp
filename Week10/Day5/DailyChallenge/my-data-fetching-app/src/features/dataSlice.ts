import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';
import { Recipe } from '../types/types';

// async action to fetch recipe data
export const fetchRecipeData = createAsyncThunk<Recipe[]>(
  'data/fetchRecipeData',
  async () => {
    const data = await fetchData<Recipe[]>();
    return data;
  }
);

interface DataState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  recipes: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeData.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default dataSlice.reducer;


