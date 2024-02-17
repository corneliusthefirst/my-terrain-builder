// authSlice.ts
import {createSlice} from '@reduxjs/toolkit';

const initialState = {}

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {

  },
});

// Export the reducer and actions
export const gridReducer = gridSlice.reducer;
