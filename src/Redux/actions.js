import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT');

const deleteContact = createAction('DELETE_CONTACT');

const changeFilter = createAction('CHANGE_FILTER');

export default { addContact, deleteContact, changeFilter };
