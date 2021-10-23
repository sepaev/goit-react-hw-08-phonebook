import css from '../Form.module.css';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputChange } from '../../../redux/inputs/inputs-actions';

const InputMail = () => {
  const [mail, setMail] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    setMail(value);
  };
  const handleBlur = () => {
    dispatch(inputChange('mail', mail));
  };
  return (
    <label className={css.form_label}>
      <span>Почта</span>
      <InputMask
        key='emailKey'
        className={css.form_input}
        type='email'
        name='email'
        value={mail}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='email@example.com'
        title='Введите e-mail'
        required
      />
    </label>
  );
};

export default InputMail;
