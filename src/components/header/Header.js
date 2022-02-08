import React from 'react';
import { HeaderContainer } from '../common/container/StyledContainer';
import Logo from '../common/logo/Logo';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
