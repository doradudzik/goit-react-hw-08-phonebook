import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import css from '../components/App.module.css';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.app}>
        <div>
          <title>Your contacts</title>
        </div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
      {isLoading && !error && <Loader />}
    </>
  );
};

export default Contacts;
