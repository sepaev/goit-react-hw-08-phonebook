import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:4321';
// add fake json
// axios.defaults.baseURL = 'https://my-json-server.typicode.com/sepaev/goit-react-hw-08-phonebook/';

export async function fetchContacts() {
  return await axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(error => {
      if (error.message === 'Network Error') {
        Notify.failure(`Sorry. Server is not working. Please check the connection`);
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
      Notify.info(`Contact ${newName} was added successfully`);
      return response;
    })
    .catch(error => {
      Notify.failure(`Oh, no! ${error.message} Nothing was added.`);
      return null;
    });
  return data;
}

export async function deleteContact(id, name) {
  axios
    .delete('/contacts/' + id)
    .then(_ => {
      Notify.success(`Contact ${name} was removed successfully`);
      return true;
    })
    .catch(error => {
      Notify.failure(`Oh, no! ${error.message} Nothing was deleted.`);
      return false;
    });
}

export async function signup(newUser) {
  return await axios
    .post('/users/signup', newUser)
    .then(response => {
      console.log('res -', response);
      alert();
      if (response.status === 400) {
      }
      Notify.success(`Contact ${newUser.name} was registred successfully`);
      console.log('data - ', response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error.response.data - ', error.response.data);
      Notify.failure(`${error.name}. ${error.message}`);
      throw new Error(error);
    });
}

export async function login(email, password) {
  try {
    const { data } = await axios.post('/users/login', { email, password });
    return data;
  } catch (error) {
    return error;
  }
}
