import { Route, Switch } from 'react-router-dom';
import { HomeView, LoginView, RegisterView, ContactsView, UserInfo, NotFoundView } from '../../views';
import { AppBar } from '../AppBar';
import { useDispatch } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import background from '../../images/background.jpg';
import css from './App.module.css';
import { authOperations } from '../../redux/auth';
import { useEffect } from 'react';
import { PrivateRoute, PublicRoute } from '../Routs';
function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
          <PublicRoute path='/login'>
            <LoginView />
          </PublicRoute>
          <PublicRoute path='/register'>
            <RegisterView />
          </PublicRoute>
          <Route path='/'>
            {/* <HomeView /> */}
            <NotFoundView />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
