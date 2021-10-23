import { createAction } from '@reduxjs/toolkit';

export const inputChange = createAction('input/change', (inputName, value) => {
  return { payload: { inputName, value } };
});
