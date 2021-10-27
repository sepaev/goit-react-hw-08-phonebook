import { createAction } from '@reduxjs/toolkit';
import { initialState } from './';

export const inputChange = createAction('input/change', (inputName, value) => {
  return { payload: { inputName, value } };
});

export const inputsClear = createAction('input/clear', () => {
  return { payload: { initialState } };
});
