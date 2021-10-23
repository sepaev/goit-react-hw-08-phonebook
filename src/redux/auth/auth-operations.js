import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const register = createAsyncThunk('auth/register', async registrationData => {
  try {
    const { data } = await axios.post('/users/signup', registrationData);
    return data;
  } catch (error) {
    return error;
  }
});

const logIn = createAsyncThunk('auth/login', async loginData => {
  try {
    const { data } = await axios.post('/users/login', loginData);
    return data;
  } catch (error) {
    return error;
  }
});

const authOperations = {
  register,
  logIn,
};

export default authOperations;