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
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled]: () => initialState,
    [authOperations.logIn.rejected](state, action) {
      state.error = action.error;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.error = action.error;
    },
    [authOperations.logOut.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default authSlice.reducer;
