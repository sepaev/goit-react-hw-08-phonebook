import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logOut } from '../../redux/auth/auth-operations';
import { getAuthSelector } from '../../redux/selectors';
import css from './AppBar.module.css';

function UserMenu() {
  const { user } = useSelector(getAuthSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <nav className={css._nav}>
      <NavLink
        to={{ pathname: '/userinfo', state: { pathback: location } }}
        className={css._userMail}
        activeClassName={css._activeLink}
      >
        добро пожаловать {user.name}
      </NavLink>
      <NavLink
        to={{ pathname: '/', state: { pathback: null } }}
        className={css._link}
        activeClassName={css._activeLink}
        onClick={handleClick}
      >
        Выйти
      </NavLink>
    </nav>
  );
}

export default UserMenu;
