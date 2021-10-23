import { createReducer } from '@reduxjs/toolkit';
import { makeSearch } from './actions/filter_actions';
import { addNewContactToState, clearNewContact } from './actions/newContacts_actions';
import { getContacts, addContact, removeContact } from './operations/contactsOperations';

export const filterReducer = createReducer('', { [makeSearch.type]: (_, { payload }) => payload });

export const newContactReducer = createReducer(
  { newName: '', newNumber: '' },
  {
    [addNewContactToState]: (_, { payload }) => payload,
    [clearNewContact]: (_, { payload }) => payload,
  },
);

export const entities = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [removeContact.fulfilled]: (state, action) => {
    const contact = action.meta.arg;
    return state.filter(({ id }) => id !== contact.id);
  },
  [getContacts.fulfilled]: (state, { payload }) => (state.length === payload.length ? state : payload),
});

export const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

export const error = createReducer(null, {
  //get
  [getContacts.rejected]: (_, { error }) => error,
  [getContacts.pending]: () => null,
  //post
  [addContact.rejected]: (_, { error }) => error,
  [addContact.pending]: () => null,
  //delete
  [removeContact.rejected]: (_, { error }) => error,
  [removeContact.pending]: () => null,
});

export const authReducer = createReducer(null, null);
