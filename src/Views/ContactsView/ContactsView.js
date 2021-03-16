import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import AddContactForm from '../../Components/AddContactForm/AddContactForm';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Filter from '../../Components/Filter/Filter';

import selectors from '../../Redux/selectors';

import s from './ContactsView.module.css';

class ContactsView extends Component {
  render() {
    return (
      <div className="">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>

        <AddContactForm />

        <Filter />

        {this.props.loading && <h1>Загружаем...</h1>}

        <ContactsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: selectors.getLoading(state),
});

export default connect(mapStateToProps)(ContactsView);
