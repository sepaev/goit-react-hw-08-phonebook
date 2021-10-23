import { createSlice } from '@reduxjs/toolkit';
import { inputChange } from './inputs-actions';

const initialState = {
  mail: '',
  name: '',
  number: '',
  password_new: '',
  password_repete: '',
  password_default: '',
};

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  extraReducers: {
    [inputChange](state, { payload: { inputName, value } }) {
      state[inputName] = value;
    },
  },
});

export default inputsSlice.reducer;
