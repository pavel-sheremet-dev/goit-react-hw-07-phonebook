import Navigation from 'components/navigation/Navigation';
import React from 'react';
import { HeaderContainer } from '../common/container/StyledContainer';
import Logo from '../common/logo/Logo';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import { navRoutes, privateRoutes } from 'routes/routes';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation navRoutes={navRoutes} privateRoutes={privateRoutes} />
        <ThemeSwitcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
