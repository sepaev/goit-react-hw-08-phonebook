import { Route, Switch } from 'react-router-dom';
import { HomeView, LoginView, RegisterView, ContactsView, UserInfo } from '../../views';
import { AppBar } from '../AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import background from '../../images/background.jpg';
import css from './App.module.css';
import { authOperations } from '../../redux/auth';
import { useEffect } from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    dispatch(authOperations.fetchUser());
  }, [dispatch]);
  return (
    <div
      className={css._app}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <div className='Container'>
        <AppBar />
        <Switch>
          <Route path='/' exact>
            <HomeView />
          </Route>
          <PrivateRoute path='/contacts' exact>
            <ContactsView />
          </PrivateRoute>
          <PrivateRoute path='/userinfo' exact>
            <UserInfo />
          </PrivateRoute>
          {!isLoggedIn && (
            <Route path='/login'>
              <LoginView />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path='/register'>
              <RegisterView />
            </Route>
          )}
          <Route path='/'>
            <HomeView />
            {/* <NotFoundView /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
