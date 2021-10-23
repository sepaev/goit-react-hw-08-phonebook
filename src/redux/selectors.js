import doFiltration from './operations/filterOperations';
export const getAllStateSelector = state => state;

export const getAuthSelector = state => state.auth;
export const getFilterSelector = state => state.filter;
export const getContactsSelector = state => state.contacts;
export const getNewContactSelector = state => state.newContact;

export const getErrorSelector = state => getContactsSelector(state).error;
export const getEntitiesSelector = state => getContactsSelector(state).entities;

export const getFiltredContactsSelector = state => {
  const filter = getFilterSelector(state);
  const contacts = getEntitiesSelector(state);

  if (!contacts || !contacts.length) return [];
  return filter ? doFiltration(state) : contacts;
};
