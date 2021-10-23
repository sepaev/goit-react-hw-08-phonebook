import css from '../Form.module.css';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { inputChange } from '../../../redux/inputs/inputs-actions';
import { useDispatch } from 'react-redux';

const InputPassword = ({ status = 'default' }) => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let label;

  switch (status) {
    case 'new':
      label = 'Придумайте пароль';
      break;
    case 'repete':
      label = 'Повторите пароль';
      break;
    default:
      label = 'Введите пароль';
      break;
  }

  const handleChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleBlur = () => {
    dispatch(inputChange('password_' + status, password));
  };

  return (
    <label className={css.form_label}>
      <span>{label}</span>
      <InputMask
        key={'password_' + status + '_key'}
        className={css.form_input}
        type='text'
        name='password'
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
    </label>
  );
};

export default InputPassword;
