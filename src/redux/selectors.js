export const getAllStateSelector = state => state;

export const getAuthSelector = state => state.auth;
export const getFilterSelector = state => state.filter;
export const getContactsSelector = state => state.contacts;
export const getNewContactSelector = state => state.newContact;

export const getErrorSelector = state => getContactsSelector(state).error;
export const getEntitiesSelector = state => getContactsSelector(state).entities;
