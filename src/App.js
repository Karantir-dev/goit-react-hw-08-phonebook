// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactsList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

import s from './App.module.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');

  //   if (contacts) {
  //     this.setState({ contacts: JSON.parse(contacts) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

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

        <ContactsList />
      </div>
    );
  }
}

export default App;
