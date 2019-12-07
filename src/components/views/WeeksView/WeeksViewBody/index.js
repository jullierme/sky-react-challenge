import React from 'react';
import Results from '../../../../components/Results';
import {
  Container,
  ResultsContainer,
  WeeksContainer,
  Title,
  Week,
} from './styles';

function WeeksViewBody({ weeks, chosenWeek }) {
  return (
    <Container>
      <Title>Weeks</Title>

      <WeeksContainer>
        {weeks.map((week, index) => (
          <Week
            key={index}
            to={`/weeks/${index + 1}`}
            selected={chosenWeek - 1 === index ? 1 : 0}
          >
            {index + 1}
          </Week>
        ))}
      </WeeksContainer>

      <Title>Results for week #{chosenWeek}</Title>

      <ResultsContainer>
        <Results data={weeks[chosenWeek - 1]} />
      </ResultsContainer>
    </Container>
  );
}

export default WeeksViewBody;
