import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const allContacts = createReducer([], {
  [actions.fetchContactsSucсess]: (_, { payload }) => payload,
  [actions.addContactSucсess]: (prevState, { payload }) => {
   
    return [
    payload,
    ...prevState,
  ]},
  [actions.deleteContactSucсess]: (prevState, { payload }) => {
   
    return prevState.filter(({ id }) => {
  
      return id !== payload;
    });
  },
});

const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSucсess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSucсess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ allContacts, filter, loading });
