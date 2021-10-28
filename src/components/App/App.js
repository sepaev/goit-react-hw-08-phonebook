import { Route, Switch } from 'react-router-dom';
import { HomeView, LoginView, RegisterView, ContactsView, UserInfo, NotFoundView } from '../../views';
import { AppBar } from '../AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import background from '../../images/background.jpg';
import css from './App.module.css';
import { authOperations } from '../../redux/auth';
import { useEffect } from 'react';
import { PrivateRoute, PublicRoute } from '../Routs';
function App() {
  const dispatch = useDispatch();

  const isFetchingUser = useSelector(authSelectors.getisFetchingUserSelector);
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
        {!isFetchingUser && (
          <Switch>
            <PublicRoute exact path='/'>
              <HomeView />
            </PublicRoute>
            <PrivateRoute exact path='/contacts'>
              <ContactsView />
            </PrivateRoute>
            <PrivateRoute exact path='/userinfo'>
              <UserInfo />
            </PrivateRoute>
            <PublicRoute path='/login' restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute path='/register' restricted>
              <RegisterView />
            </PublicRoute>
            <Route path='/'>
              {/* <HomeView /> */}
              <NotFoundView />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
