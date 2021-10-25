import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
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
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token || null;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
