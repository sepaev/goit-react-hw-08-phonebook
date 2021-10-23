import PropTypes from 'prop-types';
import { Form, Contacts, MainPage } from '../';
import { Notify } from 'notiflix';
import css from './Section.module.css';

Notify.init({ position: 'center-top' });

function Section({ title, component }) {
  let sectionClassName;
  switch (component) {
    case 'Main':
      sectionClassName = css.main_section;
      break;
    case 'Contacts':
      sectionClassName = css.contacts_section;
      break;
    default:
      sectionClassName = css.form_section;
  }
  return (
    <section className={sectionClassName}>
      <h1 className={css.section_title}>{title}</h1>
      {component === 'Main' && <MainPage />}
      {component === 'Contacts' && <Contacts />}
      {component === 'AddNumber' && <Form form='addNumber' submitButtonText='Добавить контакт' />}
      {component === 'Login' && <Form form='login' submitButtonText='Войти' />}
      {component === 'Register' && <Form form='register' submitButtonText='Зарегистрироваться' />}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};
