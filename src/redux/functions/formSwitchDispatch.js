import { Notify } from 'notiflix';
import { addNewContactAction } from '../../redux/actions/newContacts_actions.js';
import { authOperations } from '../../redux/auth';

function formSwitchDispatch(event, form, dispatch, inputs) {
  switch (form) {
    case 'addNumber':
      return dispatch(addNewContactAction(event));
    case 'login':
      const email = inputs.mail;
      const password = inputs.password_default;
      dispatch(authOperations.logIn({ email, password }));
      break;
    case 'register':
      if (inputs.password_new !== inputs.password_repete) {
        Notify.failure(`Пароли не рованы`);
        break;
      }
      if (inputs.password_new.length < 7) {
        Notify.failure(`Короткий пароль. Минимум 7 символов`);
        break;
      }
      dispatch(authOperations.register({ name: inputs.name, email: inputs.mail, password: inputs.password_new }));
      break;

    default:
      Notify.failure(`Функция в разработке`);
      break;
  }
}

export default formSwitchDispatch;
