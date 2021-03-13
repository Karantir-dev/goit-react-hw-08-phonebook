import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import operations from '../../Redux/operations';

import s from './Contact.module.css';
import icon from '../../icons.svg';

function Contact({ contact, onDelete }) {
  return (
    <li className={s.listItem}>
      {`${contact.contactName}: ${contact.contactNumber}`}
      <button
        className={s.btn}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        <img className={s.svg} src={icon} alt="" />
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
