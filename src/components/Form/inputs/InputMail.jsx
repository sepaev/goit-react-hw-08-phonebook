import css from '../Form.module.css';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputChange } from '../../../redux/inputs/inputs-actions';

const InputMail = ({ value, disabled = false }) => {
  const [mail, setMail] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    setMail(value);
  };
  const handleBlur = () => {
    dispatch(inputChange('mail', mail));
  };

  useEffect(() => {
    if (value) setMail(value);
  }, [value]);
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
        disabled={disabled}
        required
      />
    </label>
  );
};

export default InputMail;
