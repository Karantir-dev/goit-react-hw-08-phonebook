import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import actions from '../../Redux/actions';
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
      this.props.onSubmit(this.state);
      this.setState({ contactName: '', contactNumber: '' });
    }
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <label className={s.label}>
            Name
            <input
              className={s.formInput}
              name="contactName"
              onChange={this.onChange}
              value={this.state.contactName}
            ></input>
          </label>

          <label className={s.label}>
            Number
            <input
              className={s.formInput}
              type="tel"
              name="contactNumber"
              onChange={this.onChange}
              value={this.state.contactNumber}
            ></input>
          </label>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>

        <CSSTransition
          in={this.state.warningShown}
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

const mapStateToProps = state => ({
  allContacts: state.allContacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => {
    contact.id = uuidv4();
    return dispatch(actions.addContact(contact));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
