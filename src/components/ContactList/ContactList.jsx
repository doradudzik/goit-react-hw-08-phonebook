import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
