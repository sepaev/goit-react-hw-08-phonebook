import { useSelector } from 'react-redux';
import { getAuthSelector } from '../../redux/selectors';
import { Navigation, AuthNav, UserMenu } from './';
import css from './AppBar.module.css';

const AppBar = () => {
  //   const { user, token, isLoggedIn } = useSelector(getAuthSelector);
  const { isLoggedIn } = useSelector(getAuthSelector);
  return (
    <header className={css.appBar}>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
