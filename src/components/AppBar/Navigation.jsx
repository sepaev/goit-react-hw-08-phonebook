import { NavLink, useLocation } from 'react-router-dom';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getAuthSelector } from '../../redux/selectors';

function Navigation() {
  const location = useLocation();
  const { isLoggedIn } = useSelector(getAuthSelector);
  return (
    <nav className={css._nav}>
      <NavLink exact to={'/'} className={css._link} activeClassName={css._activeLink}>
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to={{ pathname: '/contacts', state: { pathback: location } }}
          className={css._link}
          activeClassName={css._activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
