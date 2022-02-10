import { useState } from 'react';

import { contactsHooks } from 'redux/contacts';

// components
import ContactsForm from 'components/contactsForm';
import ContactsList from 'components/contactsList';
import Filter from 'components/filter';
import EmptyContactsNotify from 'components/common/notify/EmptyContactsNotify';
import Section from 'components/common/section/Section';

const { useGetContactsQuery } = contactsHooks;

const Contacts = () => {
  const { data: contacts, isSuccess, isError } = useGetContactsQuery();
  const [filter, setFilter] = useState('');

  return (
    <>
      <Section titleLevel="h1" title="Simple phonebook">
        <ContactsForm />
      </Section>
      <Section titleLevel="h2" title="Your Contacts">
        {isSuccess && (
          <>
            <Filter getFilterValue={setFilter} />
            <ContactsList contacts={contacts} filter={filter} />
          </>
        )}
        {isSuccess && !contacts.length && <EmptyContactsNotify />}
        {isError && <div>somesing went wrong</div>}
      </Section>
    </>
  );
};

export default Contacts;
