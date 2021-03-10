import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../Redux/actions';

import s from './Contact.module.css';
import icon from '../../icons.svg';

function Contact({ contact, onDelete }) {
  return (
    <li className={s.listItem}>
      {`${contact.contactName}: ${contact.contactNumber}`}
      <button
        className={s.btn}
        id={contact.id}
        type="button"
        onClick={onDelete}
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
  onDelete: e => dispatch(actions.deleteContact(e.currentTarget.id)),
});

export default connect(null, mapDispatchToProps)(Contact);
