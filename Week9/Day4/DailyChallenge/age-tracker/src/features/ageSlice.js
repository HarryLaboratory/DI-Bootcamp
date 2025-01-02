import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// To async action creators using Thunk
export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1); 
    }, 1000);
  });
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(-1); 
    }, 1000);
  });
});

// To slice to manage the age state
const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      });
  },
});

export default ageSlice.reducer;
