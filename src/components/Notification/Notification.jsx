import PropTypes from 'prop-types';
import { TextH2, TextError } from './Notification.styled';

function Notification({ message, type = '' }) {
  return (
    <div>
      {!type && <TextH2>{message}</TextH2>}
      {type === 'error' && <TextError>{message}</TextError>}
    </div>
  );
}

export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
