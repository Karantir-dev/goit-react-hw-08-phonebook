import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import redusers from './reducers';

const rootReducer = combineReducers({
  allContacts: redusers.contactsReducer,
  filter: redusers.filterReducer,
});

const initialState = {
  allContacts: [],
  filter: '',
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

console.log(store.getState());
export default store;
