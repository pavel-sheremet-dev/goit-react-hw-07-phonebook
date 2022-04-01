import { ButtonStyled } from 'components/common/Button/Buttonstyled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, signOut } from 'redux/auth';
import { UserMenuWrapper } from './UserMenu.tyled';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('click');
    dispatch(signOut());
  };

  return (
    <UserMenuWrapper>
      <p className="name">{userName}</p>
      <ButtonStyled onClick={handleClick}>Log Out</ButtonStyled>
    </UserMenuWrapper>
  );
};

export default UserMenu;
