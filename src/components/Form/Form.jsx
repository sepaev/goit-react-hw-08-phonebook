import css from './Form.module.css';
import { InputMail, InputName, InputNumber, InputPassword } from './inputs';
import { useDispatch } from 'react-redux';
import { addNewContactToState } from '../../redux/actions/newContacts_actions.js';

function Form({ type, submitButtonText }) {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={e => {
        console.log(e.target);
        return dispatch(addNewContactToState(e));
      }}
      className={css.form}
    >
      {type === 'addNumber' && <InputName />}
      {type === 'addNumber' && <InputNumber />}
      {type === 'login' && <InputMail />}
      {type === 'login' && <InputPassword />}
      {type === 'register' && <InputName />}
      {type === 'register' && <InputMail />}
      {type === 'register' && <InputPassword status='new' />}
      {type === 'register' && <InputPassword status='repete' />}

      <button type='submit' className={css.form_submit}>
        {submitButtonText}
      </button>
    </form>
  );
}
export default Form;
