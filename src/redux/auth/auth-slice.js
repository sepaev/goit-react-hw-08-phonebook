import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.fetchUser.pending](state, { payload }) {
      state.isFetchingUser = true;
    },
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
    [authOperations.fetchUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.error = null;
      state.isFetchingUser = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.error.message;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [authOperations.logOut.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [authOperations.fetchUser.rejected]: (_, action) => {
      return { ...initialState, error: action.error.message };
    },
  },
});

export default authSlice.reducer;
