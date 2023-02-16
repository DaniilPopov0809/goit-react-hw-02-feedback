import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsContainer,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>
          Good: <StatisticsContainer>{good}</StatisticsContainer>
        </StatisticsItem>
        <StatisticsItem>
          Neutral: <StatisticsContainer>{neutral}</StatisticsContainer>
        </StatisticsItem>
        <StatisticsItem>
          Bad: <StatisticsContainer>{bad}</StatisticsContainer>
        </StatisticsItem>
        <StatisticsItem>
          Total: <StatisticsContainer>{total}</StatisticsContainer>
        </StatisticsItem>
        <StatisticsItem>
          Positive feedback:{' '}
          <StatisticsContainer>{positivePercentage}%</StatisticsContainer>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
