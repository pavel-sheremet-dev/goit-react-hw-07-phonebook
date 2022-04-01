import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

// components
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import EmptyContactsNotify from '../common/notify/EmptyContactsNotify';
import Section from '../common/section/Section';

const { getItems } = contactsOperations;

const { getContacts, getError } = contactsSelectors;

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  const dispatch = useDispatch();

  console.log('error', error);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoadingUser) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      <Section titleLevel="h1" title="Simple phonebook">
        <ContactsForm />
      </Section>
      <Section titleLevel="h2" title="Your Contacts">
        {error && <div>Somesing went wrong</div>}
        {contacts?.length ? (
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
