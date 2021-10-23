import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.logIn.fulfilled](state, action) {
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.contacts.error = action.payload;
    },
    [authOperations.register.fulfilled](state, action) {
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.contacts.error = action.payload;
    },
  },
});

export default authSlice.reducer;
