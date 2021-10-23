import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputMail = () => {
  return (
    <label className={css.form_label}>
      <span>Почта</span>
      <InputMask
        key='emailKey'
        className={css.form_input}
        type='email'
        name='email'
        placeholder='email@example.com'
        pattern='*{3,20}@*{3,20}.*{2,7}'
        title='Введите e-mail'
        required
      />
    </label>
  );
};

export default InputMail;
