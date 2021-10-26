// import { Notify } from 'notiflix';
// import { addNewContactAction } from '../actions/newContacts_actions.js';
// import { authOperations } from '../auth';

function translateErorr(error) {
  if (!error) return null;
  if (error.message.includes('400')) return 'Не верный логин/пароль';
  return error.message;
}

export default translateErorr;
