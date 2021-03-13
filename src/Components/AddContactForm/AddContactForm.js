import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
// import { uuid } from 'uuidv4';

import operations from '../../Redux/operations';
import Notification from '../Notification/Notification';

import stylesNotif from '../Notification/Notification.module.css';
import s from './AddContactForm.module.css';

class AddContactForm extends Component {
  state = {
    contactName: '',
    contactNumber: '',
    warningShown: false,
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (
      this.props.allContacts.some(
        ({ contactName }) => contactName === this.state.contactName,
      )
    ) {
      this.setState({ warningShown: true });

      setTimeout(() => {
        this.setState({ warningShown: false });
      }, 3000);
    } else {
      const { contactName, contactNumber } = this.state;
      const contact = { contactName, contactNumber };

      this.props.onSubmit(contact);
      this.setState({ contactName: '', contactNumber: '' });
    }
  };

  render() {
    const { warningShown, contactNumber, contactName } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <label className={s.label}>
            Name
            <input
              className={s.formInput}
              name="contactName"
              onChange={this.onChange}
              value={contactName}
            ></input>
          </label>

          <label className={s.label}>
            Number
            <input
              className={s.formInput}
              type="tel"
              name="contactNumber"
              onChange={this.onChange}
              value={contactNumber}
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
  allContacts: state.allContacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => {
    // contact.id = uuid();
    dispatch(operations.addContact(contact));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
