import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputNumber = ({ value, onBlur, onChange }) => {
  return (
    <label className={css.form_label}>
      <span>Номер</span>
      <InputMask
        key='numberKey'
        className={css.form_input}
        type='tel'
        name='number'
        onChange={({ target: { value } }) => onChange('number', value)}
        onBlur={() => onBlur('number')}
        value={value}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        placeholder='+38 (099) 999-99-99'
        mask='+38 (099) 999-99-99'
        title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        required
      />
    </label>
  );
};

export default InputNumber;
