import { useState } from 'react';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value.trim());
    } else if (name === 'number') {
      setNumber(value.trim());
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    if (name === '' || phone === '') {
      alert('Please fill in all fields');
      return;
    }

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.phone === phone
    );

    if (existingContact) {
      alert('This contact already exists');
      return;
    }
    dispatch(addContact({ name, phone }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        className={css.input}
      />
      <label>Number:</label>
      <input
        type="tel"
        value={phone}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        className={css.input}
      />
      <button type="submit" className={css.btnInput}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
