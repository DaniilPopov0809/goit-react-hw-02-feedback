import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
