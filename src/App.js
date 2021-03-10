import { CSSTransition } from 'react-transition-group';

import AddContactForm from './Components/AddContactForm/AddContactForm';
import ContactsList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

import s from './App.module.css';

function App() {
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

export default App;
