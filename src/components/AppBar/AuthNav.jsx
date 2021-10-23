import { NavLink, useLocation } from 'react-router-dom';
import css from './AppBar.module.css';

function AuthNav() {
  const location = useLocation();
  return (
    <nav className={css._nav}>
      <NavLink
        to={{ pathname: '/register', state: { pathback: location } }}
        className={css._link}
        activeClassName={css._activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to={{ pathname: '/login', state: { pathback: location } }}
        className={css._link}
        activeClassName={css._activeLink}
      >
        Войти
      </NavLink>
    </nav>
  );
}

export default AuthNav;
