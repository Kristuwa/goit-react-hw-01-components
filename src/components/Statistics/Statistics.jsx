import PropTypes from 'prop-types';
import {
  SectionCardStatistics,
  Title,
  StatsList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionCardStatistics>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatsList>
    </SectionCardStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
