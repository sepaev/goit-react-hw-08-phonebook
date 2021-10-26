import axios from 'axios';
import { Notify } from 'notiflix';
import translateErorr from '../redux/functions/translateError';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const tokenToAxios = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

function onError(error) {
  Notify.failure(translateErorr(error));
  throw new Error(error.message);
}
export async function fetchContacts() {
  return await axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(error => {
      if (error.message === 'Network Error') {
        Notify.failure(`Сервер не отвечает.`);
      } else {
        Notify.failure(`${error.name}. ${error.message}`);
      }
      throw new Error(error.message);
    });
}

export async function postContact({ newName, newNumber }) {
  const { data } = await axios
    .post('/contacts', { name: newName, number: newNumber })
    .then(response => {
      Notify.info(`Контакт ${newName} добавлено`);
      return response;
    })
    .catch(error => {
      Notify.failure(`Ошибка! ${error.message}. Ничего не добавлено.`);
      return null;
    });
  return data;
}

export async function deleteContact(id, name) {
  axios
    .delete('/contacts/' + id)
    .then(_ => {
      Notify.success(`Контакт ${name} удален`);
      return true;
    })
    .catch(error => {
      Notify.failure(`Ошибка! ${error.message} Ничего не удалено.`);
      return false;
    });
}

export async function signup(newUser) {
  return await axios
    .post('/users/signup', newUser)
    .then(({ data }) => {
      tokenToAxios.set(data.token);
      Notify.success(`Пользователь ${newUser.name} зарегистрирован`);
      return data;
    })
    .catch(error => {
      const message = error.message.includes('400') ? 'Пользователь уже зарегистрирован' : error.message;
      Notify.failure(message);
      throw new Error(message);
    });
}

export async function login(user) {
  return await axios
    .post('/users/login', user)
    .then(({ data }) => {
      tokenToAxios.set(data.token);
      Notify.success(`Приветствую ${user.name}! Вы вошли.`);
      return data;
    })
    .catch(error => {
      const message = error.message.includes('400') ? 'Не верный логин или пароль' : error.message;
      Notify.failure(message);
      throw new Error(message);
    });
}

export async function logout(user) {
  return await axios
    .post('/users/logout', user)
    .then(response => {
      Notify.success(`До скорой встречи!`);
      tokenToAxios.unset();
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      const message = error.message.includes('400') ? 'Вы не можете этого сделать' : error.message;
      Notify.failure(message);
      throw new Error(message);
    });
}
