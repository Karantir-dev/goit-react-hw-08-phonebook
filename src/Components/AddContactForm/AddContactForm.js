import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import InputMask from 'react-input-mask';
import Notification from '../Notification/Notification';

import contactsOperations from '../../Redux/contacts/contacts-operations';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './AddContactForm.module.css';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
    warningShown: false,
    textNotification: '',
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  showWarning = text => {
    this.setState({
      textNotification: text,
      warningShown: true,
    });

    setTimeout(() => {
      this.setState({ warningShown: false });
    }, 3000);
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name) {
      this.showWarning('Enter contact name.');
    } else if (!number) {
      this.showWarning('Enter contact number.');
    } else if (
      this.props.allContacts.some(({ name }) => name === this.state.name)
    ) {
      this.showWarning('This contact is already on the list.');
    } else {
      this.props.onAddContact({ name, number });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { warningShown, number, name, textNotification } = this.state;

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
            <InputMask
              className={s.formInput}
              type="tel"
              name="number"
              onChange={this.onChange}
              value={number}
              mask="+3\8(999) 999-99-99"
              maskChar={null}
            />
          </label>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>

        {createPortal(
          <Notification text={textNotification} show={warningShown} />,
          document.getElementById('portal'),
        )}
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
