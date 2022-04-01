import UserMenu from 'components/userMenu/UserMenu';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

const Navigation = ({ navRoutes, privateRoutes }) => {
  return (
    <NavigationStyled>
      <ul className="nav-list">
        {Object.keys(navRoutes).map(key => {
          const { id, title, path } = navRoutes[key];
          return (
            <li key={id} className="nav-item">
              <NavLink className="nav-link" to={path}>
                {title}
              </NavLink>
            </li>
          );
        })}
        {Object.keys(privateRoutes).map(key => {
          const { id, title, path } = privateRoutes[key];
          return (
            <li key={id} className="nav-item">
              <NavLink className="nav-link" to={path}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <UserMenu />
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  navRoutes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  privateRoutes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
