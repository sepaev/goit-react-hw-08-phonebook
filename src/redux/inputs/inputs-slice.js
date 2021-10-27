import { createSlice } from '@reduxjs/toolkit';
import { inputChange, inputsClear } from './inputs-actions';
import initialState from './inputs-initial';

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  extraReducers: {
    [inputChange]: (state, { payload: { inputName, value } }) => {
      state[inputName] = value;
    },
    [inputsClear]: (_, { payload }) => payload.initialState,
  },
});

export default inputsSlice.reducer;
