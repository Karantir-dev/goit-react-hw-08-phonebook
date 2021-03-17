import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import contactsOperations from '../../Redux/contacts/contacts-operations';

import stylesNotif from '../Notification/Notification.module.css';
import s from './AddContactForm.module.css';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
    warningShown: false,
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.props.allContacts.some(({ name }) => name === this.state.name)) {
      this.setState({ warningShown: true });

      setTimeout(() => {
        this.setState({ warningShown: false });
      }, 3000);
    } else {
      const { name, number } = this.state;
      const contact = { name, number };

      this.props.onAddContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { warningShown, number, name } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <label className={s.label}>
            Name
            <input
              className={s.formInput}
              name="name"
              onChange={this.onChange}
              value={name}
            ></input>
          </label>

          <label className={s.label}>
            Number
            <input
              className={s.formInput}
              type="tel"
              name="number"
              onChange={this.onChange}
              value={number}
            ></input>
          </label>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>

        <CSSTransition
          in={warningShown}
          classNames={stylesNotif}
          timeout={250}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </>
    );
  }
}

AddContactForm.propTypes = {
  allContacts: PropTypes.array,
  onSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  allContacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
