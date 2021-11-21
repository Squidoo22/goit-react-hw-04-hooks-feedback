import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={s.title}>{message}</h2>;
};

Notification.propTypes = { title: PropTypes.string };

export default Notification;
