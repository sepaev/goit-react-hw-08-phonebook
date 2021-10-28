import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputPassword = ({ value, onBlur, onChange, status = 'default' }) => {
  let label = 'Введите пароль';
  if (status === 'new') label = 'Придумайте пароль';
  if (status === 'repete') label = 'Повторите пароль';

  return (
    <label className={css.form_label}>
      <span>{label}</span>
      <InputMask
        key={'password_' + status + '_key'}
        className={css.form_input}
        type='password'
        name='password'
        value={value}
        onChange={({ target: { value } }) => onChange('password_' + status, value)}
        onBlur={() => onBlur('password_' + status)}
        required
      />
    </label>
  );
};

export default InputPassword;
