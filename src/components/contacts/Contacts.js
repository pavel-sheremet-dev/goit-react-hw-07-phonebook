import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors } from '../../redux/contacts';
import { contactsOperations } from '../../redux/contacts';

// components
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import EmptyContactsNotify from '../common/notify/EmptyContactsNotify';
import Section from '../common/section/Section';

const { getItems } = contactsOperations;

const { getContacts, getError } = contactsSelectors;

const Contacts = () => {
  const contacts = useSelector(state => getContacts(state));
  const error = useSelector(state => getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <Section titleLevel="h1" title="Simple phonebook">
        <ContactsForm />
      </Section>
      <Section titleLevel="h2" title="Your Contacts">
        {error && <div>Somesing went wrong</div>}
        {contacts.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <EmptyContactsNotify />
        )}
      </Section>
    </>
  );
};

export default Contacts;
