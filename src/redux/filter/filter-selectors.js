import { getEntitiesSelector } from '../contacts/contacts-selectors';
import doFiltration from './filter-operations';

export const getFilterSelector = state => state.filter;

export const getFiltredContactsSelector = state => {
  const filter = getFilterSelector(state);
  const contacts = getEntitiesSelector(state);

  if (!contacts || !contacts.length) return [];
  return filter ? doFiltration(state) : contacts;
};
