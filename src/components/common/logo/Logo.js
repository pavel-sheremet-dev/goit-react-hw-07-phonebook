import { FirstWord, LogoWrapper } from './Logo.styled';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoWrapper>
      <NavLink className="nav-link" to="/">
        <FirstWord>Phone</FirstWord>
        <span>book</span>
      </NavLink>
    </LogoWrapper>
  );
};

export default Logo;
