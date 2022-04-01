import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import toast from 'react-hot-toast';
import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import Container from 'components/common/container/Container';
import {
  InputField,
  InputName,
  Label,
} from 'components/common/input/Input.styled';
import { Form } from 'components/contactsForm/ContactsForm.styled';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const loading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = { email, password };
    dispatch(authOperations.signIn(credentials));
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const isDisabled = !email || !password || loading;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            autoComplete="off"
          />
        </Label>
        <ButtonStyled disabled={isDisabled} type="submit">
          Sign In
        </ButtonStyled>
      </Form>
    </Container>
  );
};

export default SignInPage;
