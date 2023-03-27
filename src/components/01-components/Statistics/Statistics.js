import {
  StatisticsContainer,
  StatisticsTitle,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <section>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}

        <StatList>
          {stats.map(stat => (
            <StatListItem
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              key={stat.id}
            >
              <StatLabel>{stat.label}</StatLabel>
              <StatPercentage>{stat.percentage}%</StatPercentage>
            </StatListItem>
          ))}
        </StatList>
      </section>
    </StatisticsContainer>
  );
};
