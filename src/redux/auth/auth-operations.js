import { signup, login, logout } from '../../services/phonebookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/registeration', async newUser => await signup(newUser));
export const logIn = createAsyncThunk('auth/login', async user => await login(user));
export const logOut = createAsyncThunk('auth/logout', async () => await logout());

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
