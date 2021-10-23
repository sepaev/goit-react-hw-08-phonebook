import { TextH2 } from './MainPage.styled';
import { useSelector } from 'react-redux';
import { getAuthSelector } from '../../redux/selectors';
import { Notification } from '../';

function MainPage({ message }) {
  const { user, isLoggedIn } = useSelector(getAuthSelector);
  return (
    <div>
      <TextH2>{message}</TextH2>
      {!isLoggedIn && <Notification message='To view application, you must login first.' />}
      {isLoggedIn && (
        <Notification
          message={`Hellow ${user.name}! You are logged in. Please visit Contacts page, to see your contacts.`}
        />
      )}
    </div>
  );
}

export default MainPage;
