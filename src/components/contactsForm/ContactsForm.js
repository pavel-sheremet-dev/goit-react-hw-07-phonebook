import React, { useState, memo } from 'react';
import { Form } from './ContactsForm.styled';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import {
  InputName,
  Label,
  InputField,
} from 'components/common/input/Input.styled';
import toast from 'react-hot-toast';
import { contactsHooks } from 'redux/contacts';
import Loader from 'components/common/loader/Loader';

const { useAddContactMutation, useGetContactsQuery } = contactsHooks;

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts, isFetching } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = e => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName === 'name') {
      setName(value);
    }
    if (inputName === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeName = textNormalize(name);

    const isInContacts = contacts.some(
      item => item.name.toLowerCase() === normalizeName,
    );

    if (isInContacts) {
      toast(`${name} is already in your contacts`);
      return;
    }

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  const textNormalize = text => {
    return text.toLowerCase();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <InputName>Name:</InputName>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          placeholder="Enter contact name"
          autoComplete="off"
        />
      </Label>
      <Label>
        <InputName>Phone number:</InputName>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          placeholder="Enter phone number"
          autoComplete="off"
        />
      </Label>
      <div className="button-wrapper">
        <ButtonStyled type="submit" mr={20}>
          Add contact
        </ButtonStyled>
        {isFetching && <Loader />}
      </div>
    </Form>
  );
};

export default memo(ContactsForm);
