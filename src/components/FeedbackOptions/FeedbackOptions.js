import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.box}>
      {options.map(option => (
        <button
          className={s.btn}
          key={shortid.generate()}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = { options: PropTypes.array };

export default FeedbackOptions;
