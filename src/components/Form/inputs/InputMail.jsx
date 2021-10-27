import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputMail = ({ value, onBlur, onChange, disabled = false }) => {
  return (
    <label className={css.form_label}>
      <span>Почта</span>
      <InputMask
        key='emailKey'
        className={css.form_input}
        type='email'
        name='email'
        value={value}
        onChange={({ target: { value } }) => onChange('mail', value)}
        onBlur={() => onBlur('mail')}
        placeholder='email@example.com'
        title='Введите e-mail'
        disabled={disabled}
        required
      />
    </label>
  );
};

export default InputMail;
