import { NavLink, useLocation } from 'react-router-dom';
import css from './AppBar.module.css';

function UserMenu() {
  const location = useLocation();
  return (
    <nav className={css._nav}>
      <NavLink
        to={{ pathname: '/userinfo', state: { pathback: location } }}
        className={css._userMail}
        activeClassName={css._activeLink}
      >
        добро пожаловать *NAME*
      </NavLink>
      <NavLink
        to={{ pathname: '/logout', state: { pathback: null } }}
        className={css._link}
        activeClassName={css._activeLink}
      >
        Выйти
      </NavLink>
    </nav>
  );
}

export default UserMenu;
