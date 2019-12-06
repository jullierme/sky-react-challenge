import React, { useEffect, useState } from 'react';
import { fetch } from '../../services/api';
import Results from '../Results';
import {
  Container,
  ResultsContainer,
  WeeksContainer,
  Title,
  Week,
} from './styles';

function Weeks({ match }) {
  const [weeks, setWeeks] = useState([]);
  const [chosenWeek, setChosenWeek] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeeks();
  }, []);

  useEffect(() => {
    setChosenWeek(parseInt(match.params.index, 10));
  }, [match.params.index]);

  const fetchWeeks = async () => {
    setLoading(true);

    const data = await fetch(`/weeks`);

    setWeeks(data);

    setLoading(false);
  };

  if (loading) return <div>loading...</div>;

  if (!weeks.length) return <div>Not found!</div>;

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
        <Results results={weeks[chosenWeek - 1]} />
      </ResultsContainer>
    </Container>
  );
}

export default Weeks;
