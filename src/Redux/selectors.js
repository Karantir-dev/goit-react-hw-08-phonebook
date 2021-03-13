import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;
const getAllContacts = state => state.allContacts;
const getFilter = state => state.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    return allContacts.filter(contact =>
      contact.contactName.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default { getLoading, getFilteredContacts };
