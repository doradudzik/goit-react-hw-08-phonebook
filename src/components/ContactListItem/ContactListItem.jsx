import React from 'react';
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item} id={id}>
      {name}: {phone}
      <button
        className={css.btn}
        id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
