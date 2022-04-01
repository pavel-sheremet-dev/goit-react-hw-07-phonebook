import { ButtonStyled } from 'components/common/Button/Buttonstyled';

const UserMenu = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <p>Mail</p>
      <ButtonStyled onClick={handleClick}>Log Out</ButtonStyled>
    </div>
  );
};

export default UserMenu;
