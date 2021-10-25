import css from './Form.module.css';
import { InputMail, InputName, InputNumber, InputPassword } from './inputs';
import { authOperations } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContactAction } from '../../redux/actions/newContacts_actions.js';
import { getInputsSelector } from '../../redux/inputs/inputs-selectors';
import { authSelectors } from '../../redux/auth';
import Notification from '../Notification';
import { Notify } from 'notiflix';

function Form({ form, submitButtonText }) {
  const dispatch = useDispatch();
  const inputs = useSelector(getInputsSelector);
  let error = useSelector(authSelectors.getErrorSelector);
  const handleSubmit = e => {
    e.preventDefault();
    switch (form) {
      case 'addNumber':
        return dispatch(addNewContactAction(e));
      case 'login':
        dispatch(authOperations.logIn(inputs.mail, inputs.password_default));
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
        break;
    }
    // console.dir(e.target.id);
    // console.dir(e.target[e.target.length - 1]);
  };
  return (
    <form onSubmit={handleSubmit} className={css.form} id={form}>
      {form === 'addNumber' && <InputName />}
      {form === 'addNumber' && <InputNumber />}
      {form === 'login' && <InputMail />}
      {form === 'login' && <InputPassword />}
      {form === 'register' && <InputName />}
      {form === 'register' && <InputMail />}
      {form === 'register' && <InputPassword status='new' />}
      {form === 'register' && <InputPassword status='repete' />}
      <button type='submit' className={css.form_submit} id={form}>
        {submitButtonText}
      </button>
      {error && <Notification message={error} type='error' />}
    </form>
  );
}
export default Form;
