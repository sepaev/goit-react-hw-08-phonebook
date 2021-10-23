export const getContactsSelector = state => state.contacts;
export const getErrorSelector = state => getContactsSelector(state).error;
export const getEntitiesSelector = state => getContactsSelector(state).entities;
