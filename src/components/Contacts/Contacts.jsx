import { Fragment, useEffect } from 'react';
import Notification from '../Notification';
import { useSelector, useDispatch } from 'react-redux';
import { makeSearch } from '../../redux/filter/filter-actions';
import { removeContact } from '../../redux/contacts/contacts-operations';
import { ContactsItem, ContactsList, DeleteButton, NumberSpan, SearchInput } from './Contacts.styled';
import { getFiltredContactsSelector } from '../../redux/filter/filter-selectors';
import { getContactsSelector, getErrorSelector } from '../../redux/contacts/contacts-selectors';
import { getContacts } from '../../redux/contacts/contacts-operations';
import { authSelectors } from '../../redux/auth';

function Contacts() {
  const { entities } = useSelector(getContactsSelector);
  const filterdContacts = useSelector(getFiltredContactsSelector);
  const stateError = useSelector(getErrorSelector);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  const message = entities.length
    ? 'No contacts found.'
    : stateError
    ? stateError.message + '. Contacts could not be loaded to be displayed on the screen.'
    : 'You have no contacts yet.';

  return (
    <Fragment>
      <ContactsList>
        <SearchInput
          type='text'
          name='search'
          title='Введите имя или телефон'
          placeholder='Search contact'
          onInput={e => dispatch(makeSearch(e.target.value))}
        />
        {filterdContacts.length > 0 &&
          filterdContacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              {'☎ ' + name + ': '}
              <NumberSpan>
                {number}
                <DeleteButton id={id} onClick={() => dispatch(removeContact({ id, name }))}>
                  X
                </DeleteButton>
              </NumberSpan>
            </ContactsItem>
          ))}
      </ContactsList>
      {!filterdContacts.length && <Notification message={message} />}
    </Fragment>
  );
}

export default Contacts;
