import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = ' http://localhost:4040';

const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSucсess(data)))
    .catch(err => dispatch(actions.addContactError(err)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSucсess(id)))
    .catch(err => dispatch(actions.deleteContactError(err)));
};

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSucсess(data)))
    .catch(err => dispatch(actions.fetchContactsError(err)));
};

export default { addContact, deleteContact, fetchContacts };
