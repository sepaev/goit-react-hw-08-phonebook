import { Route, Switch } from 'react-router-dom';
import { HomeView, LoginView, RegisterView, ContactsView, NotFoundView } from '../../views';
import { AppBar } from '../AppBar';
import { useSelector } from 'react-redux';
import { getAuthSelector } from '../../redux/selectors';
import background from '../../images/background.jpg';
import css from './App.module.css';
function App() {
  const { isLoggedIn } = useSelector(getAuthSelector);
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
          {isLoggedIn && (
            <Route path='/contacts' exact>
              <ContactsView />
            </Route>
          )}
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
            <NotFoundView />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
