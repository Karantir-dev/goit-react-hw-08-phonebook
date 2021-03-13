import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import selectors from '../../Redux/selectors';

import Contact from '../Contact/Contact';

import s from './ContactsList.module.css';

function ContactsList({ filteredContacts }) {
  return (
    <TransitionGroup component="ol" className={s.list}>
      {filteredContacts.map(contact => {
        return (
          <CSSTransition key={contact.id} timeout={250} classNames={s}>
            <Contact contact={contact} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.array,
};

const mapStateToProps = state => ({
  filteredContacts: selectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactsList);
