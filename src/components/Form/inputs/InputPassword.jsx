import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputPassword = ({ status }) => {
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

  return (
    <label className={css.form_label}>
      <span>{label}</span>
      <InputMask
        key={'password' + status + 'Key'}
        className={css.form_input}
        type='password'
        name='password'
        pattern='(?=.*[0-9])'
        title='Требуется хоть одна цыфра в строке'
        required
      />
    </label>
  );
};

export default InputPassword;
