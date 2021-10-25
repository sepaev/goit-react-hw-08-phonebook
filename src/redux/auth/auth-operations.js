import { signup, login } from '../../services/phonebookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/registeration', async newUser => await signup(newUser));

export const logIn = createAsyncThunk('auth/login', async (email, password) => await login(email, password));

const authOperations = {
  register,
  logIn,
};

export default authOperations;
