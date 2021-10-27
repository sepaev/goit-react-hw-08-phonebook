import { signup, login, logout, refresh } from '../../services/phonebookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/registeration', async newUser => await signup(newUser));
export const logIn = createAsyncThunk('auth/login', async user => await login(user));
export const logOut = createAsyncThunk('auth/logout', async () => await logout());
export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) return thunkAPI.rejectWithValue();
  return await refresh(persistedToken);
});
// export const fetchUser = createAsyncThunk('auth/fetchUser', async token => await refresh(token));

const authOperations = {
  register,
  logIn,
  logOut,
  fetchUser,
};

export default authOperations;
