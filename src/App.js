import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Component } from 'react';

import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactsList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';
import selectors from './Redux/selectors';
import operations from './Redux/operations';

import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
