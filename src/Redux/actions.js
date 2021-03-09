import types from './action-types';

const addContact = contact => ({
  type: types.ADD_CONTACT,
  payload: contact,
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

const onChangeFilter = text => ({
  type: types.CHANGE_FILTER,
  payload: text,
});

export default { addContact, deleteContact, onChangeFilter };
