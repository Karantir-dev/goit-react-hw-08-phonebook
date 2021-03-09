import types from './action-types';

const contactsReducer = (prevState = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [payload, ...prevState];

    case types.DELETE_CONTACT:
      return prevState.filter(({ id }) => id !== payload);

    default:
      return prevState;
  }
};

const filterReducer = (prevState = [], { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return prevState;
  }
};

export default { contactsReducer, filterReducer };
