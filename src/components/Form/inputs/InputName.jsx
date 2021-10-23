import css from '../Form.module.css';
import InputMask from 'react-input-mask';

const InputName = () => {
  return (
    <label className={css.form_label}>
      <span>Имя</span>
      <InputMask
        key='nameKey'
        className={css.form_input}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder='Arnold Schwarzenegger'
        maxLength='25'
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default InputName;
