import { useState, useMemo } from 'react';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
  BluredBackground,
} from './ContactsList.styled';
import { contactsHooks } from 'redux/contacts';

const { useDeleteContactMutation } = contactsHooks;

const ContactsList = ({ contacts, filter }) => {
  const [clickedId, setClickedId] = useState(null);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  const handleClick = id => {
    setClickedId(id);
    deleteContact(id);
  };

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactPhone>
              <PhoneLink href={`tel:${name}`}>{number}</PhoneLink>
            </ContactPhone>
          </ContactInfo>
          {isLoading && clickedId === id && <BluredBackground />}
          <ButtonStyled type="button" onClick={() => handleClick(id)}>
            Remove
          </ButtonStyled>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
