import { Route, Switch } from 'react-router-dom';
import { HomeView, LoginView, RegisterView, ContactsView } from '../../views';
import { AppBar } from '../AppBar';
import { useSelector } from 'react-redux';
import { getAuthSelector } from '../../redux/selectors';
import background from '../../images/background.jpg';
import css from './App.module.css';
import { tokenToAxios } from '../../services/phonebookAPI';
function App() {
  const { isLoggedIn, token } = useSelector(getAuthSelector);
  if (token) tokenToAxios.set(token);
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
            <HomeView />
            {/* <NotFoundView /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
