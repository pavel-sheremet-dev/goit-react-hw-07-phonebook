import { useState } from 'react';
import {
  InputField,
  InputName,
  Label,
} from 'components/common/input/Input.styled';
import { Form } from 'components/contactsForm/ContactsForm.styled';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import Container from 'components/common/container/Container';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const isDisabled = !email || !password;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <InputName>Name:</InputName>
          <InputField
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Enter your name"
            autoComplete="off"
          />
        </Label>

        <Label>
          <InputName>Email:</InputName>
          <InputField
            type="text"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="example@example.com"
            autoComplete="off"
          />
        </Label>

        <Label>
          <InputName>Password:</InputName>
          <InputField
            type="text"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Create your password"
            autoComplete="off"
          />
        </Label>
        <ButtonStyled disabled={isDisabled} type="submit">
          Sign Up
        </ButtonStyled>
      </Form>
    </Container>
  );
};

export default SignUpPage;
