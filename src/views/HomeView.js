import Section from '../components/Section';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Section title='ЛУЧШЕЕ ПРИЛОЖЕНИЕ ТЕЛЕФОННАЯ КНИГА' component='Main' />
      {/* {isLoggedIn && <hr />} */}
      {isLoggedIn && <Section title='Контакты' component='Contacts' />}
    </>
  );
};

export default HomeView;
