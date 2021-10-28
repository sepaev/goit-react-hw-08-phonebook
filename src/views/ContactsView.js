import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { Notify } from 'notiflix';
import { clearNewContact } from '../redux/actions/newContacts_actions';
import checkNewContactInState from '../redux/operations/newContactOperations';
import { useEffect } from 'react';
import { addContact } from '../redux/contacts/contacts-operations';
import { getNewContactSelector, getEntitiesSelector } from '../redux/selectors';

Notify.init({ position: 'center-top' });

function App() {
  const newContact = useSelector(getNewContactSelector);
  const contacts = useSelector(getEntitiesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newContact.newName && checkNewContactInState(newContact, contacts)) {
      dispatch(addContact(newContact));
      dispatch(clearNewContact());
    }
  }, [contacts, dispatch, newContact]);

  return (
    <>
      <Section title='Телефонная книга' component='addContact' />
      {/* <hr /> */}
      <Section title='Контакты' component='Contacts' />
    </>
  );
}

export default App;
