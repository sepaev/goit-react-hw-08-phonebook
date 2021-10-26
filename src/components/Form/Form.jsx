import css from './Form.module.css';
import { InputMail, InputName, InputNumber, InputPassword } from './inputs';

import { useDispatch, useSelector } from 'react-redux';
import { getInputsSelector } from '../../redux/inputs/inputs-selectors';
import { authSelectors } from '../../redux/auth';
import Notification from '../Notification';

import { formSwitchDispatch, translateError } from '../../redux/functions';

function Form({ form, submitButtonText }) {
  const dispatch = useDispatch();
  const inputs = useSelector(getInputsSelector);
  const error = useSelector(authSelectors.getErrorSelector);
  const message = translateError(error);
  const handleSubmit = e => {
    e.preventDefault();
    formSwitchDispatch(e, form, dispatch, inputs);
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
      {error && <Notification message={message} type='error' />}
    </form>
  );
}
export default Form;
