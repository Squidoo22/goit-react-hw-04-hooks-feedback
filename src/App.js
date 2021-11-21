import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Statistics from './components/Statistics';

const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

export default function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(state => state + 1);
        break;

      case 'neutral':
        setNeutralFeedback(state => state + 1);
        break;

      case 'bad':
        setBadFeedback(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
      const total = good + neutral + bad;
      const percentPositive = ((good * 100) / total).toFixed();
      return percentPositive;
    } else {
      return 0;
    }
  };

  const totalFeedback = countTotalFeedback();

  const totalPositiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
