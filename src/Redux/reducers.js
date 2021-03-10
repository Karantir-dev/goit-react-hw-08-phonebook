import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const allContacts = createReducer([], {
  [actions.addContact]: (prevState, { payload }) => [payload, ...prevState],

  [actions.deleteContact]: (prevState, { payload }) =>
    prevState.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ allContacts, filter });
