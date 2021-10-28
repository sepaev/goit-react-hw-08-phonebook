import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputPassword = ({ value, onBlur, onChange, status = 'default' }) => {
  let config = { label: 'Введите пароль', auto: 'on' };
  if (status === 'new') config = { label: 'Придумайте пароль', auto: 'off' };
  if (status === 'repete') config = { label: 'Повторите пароль', auto: 'off' };

  return (
    <label className={css.form_label}>
      <span>{config.label}</span>
      <InputMask
        key={'password_' + status + '_key'}
        className={css.form_input}
        type='password'
        name='password'
        value={value}
        autocomplete={config.auto}
        onChange={({ target: { value } }) => onChange('password_' + status, value)}
        onBlur={() => onBlur('password_' + status)}
        required
      />
    </label>
  );
};

export default InputPassword;
