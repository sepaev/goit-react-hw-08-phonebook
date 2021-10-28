import css from './Form.module.css';
import { InputMail, InputName, InputNumber, InputPassword } from './inputs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialState, inputsSelectors } from '../../redux/inputs';
import { inputChange, inputsClear } from '../../redux/inputs/inputs-actions';
import { authSelectors } from '../../redux/auth';
import { getContactsSelector } from '../../redux/contacts/contacts-selectors';
import Notification from '../Notification';
import { formSwitchDispatch } from '../../redux/functions';

function Form({ form, submitButtonText, isDisabled = false }) {
  const [inputs, setInputs] = useState(initialState);
  const { name, number, mail, password_default, password_new, password_repete } = inputs;
  const dispatch = useDispatch();
  const inputsState = useSelector(inputsSelectors.getInputsSelector);
  const user = useSelector(authSelectors.getUserSelector);
  const { entities } = useSelector(getContactsSelector);
  const error = useSelector(authSelectors.getErrorSelector);
  const handleSubmit = e => {
    e.preventDefault();
    formSwitchDispatch(e, form, dispatch, inputsState);
  };
  useEffect(() => {
    dispatch(inputsClear());
    setInputs(initialState);
  }, [user, form, entities, dispatch]);

  const onBlur = input => {
    dispatch(inputChange(input, inputs[input]));
  };

  const onChange = (input, value = '') => {
    setInputs(prev => ({ ...prev, [input]: value }));
  };
  return (
    <form onSubmit={handleSubmit} className={css.form} id={form}>
      {/* Login form */}
      {form === 'login' && <InputMail onChange={onChange} value={mail} onBlur={onBlur} />}
      {form === 'login' && <InputPassword onChange={onChange} value={password_default} onBlur={onBlur} />}

      {/* Register form */}
      {form === 'register' && <InputName onChange={onChange} value={name} onBlur={onBlur} />}
      {form === 'register' && <InputMail onChange={onChange} value={mail} onBlur={onBlur} />}
      {form === 'register' && <InputPassword status='new' onChange={onChange} value={password_new} onBlur={onBlur} />}
      {form === 'register' && (
        <InputPassword status='repete' onChange={onChange} value={password_repete} onBlur={onBlur} />
      )}

      {/* UserInfo form */}
      {form === 'userinfo' && <InputMail value={user.email} disabled={true} onChange={onChange} onBlur={onBlur} />}
      {form === 'userinfo' && <InputName value={user.name} disabled={true} onChange={onChange} onBlur={onBlur} />}
      {/* {form === 'userinfo' && <InputPassword status='new' disabled={true} />}
      {form === 'userinfo' && <InputPassword status='repete' disabled={true} />} */}

      {/* addContact form */}
      {form === 'addContact' && <InputName onChange={onChange} value={name} onBlur={onBlur} />}
      {form === 'addContact' && <InputNumber onChange={onChange} value={number} onBlur={onBlur} />}

      <button type='submit' className={css.form_submit} id={form} disabled={isDisabled}>
        {submitButtonText}
      </button>
      {error && <Notification message={error === 'Rejected' ? '' : error} type='error' />}
    </form>
  );
}
export default Form;
