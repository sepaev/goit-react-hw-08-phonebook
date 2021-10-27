import css from '../Form.module.css';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import { inputChange } from '../../../redux/inputs/inputs-actions';
import { useDispatch } from 'react-redux';

const InputName = ({ value, disabled = false }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleBlur = () => {
    dispatch(inputChange('name', name));
  };
  const handleChange = ({ target: { value } }) => {
    setName(value);
  };
  useEffect(() => {
    if (value) setName(value);
  }, [value]);
  return (
    <label className={css.form_label}>
      <span>Имя</span>
      <InputMask
        key='nameKey'
        className={css.form_input}
        type='text'
        name='name'
        onChange={handleChange}
        onBlur={handleBlur}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder='Арнольд Шварценеггер'
        maxLength='25'
        disabled={disabled}
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default InputName;
