import React from 'react';
import Results from '../../../../components/Results';

import {
  Body,
  Header,
  Container,
  StatsContainer,
  ResultsContainer,
  Label,
  Stat,
} from './styles';

function TeamViewBody(props) {
  const { played, points, won, drawn, gf, ga, gd } = props.stats;
  const { logo, name, results } = props.team;

  return (
    <Container>
      <Header>
        <img src={logo} alt={name + ' logo'} />
        <h1>{name}</h1>
      </Header>
      <Body>
        <StatsContainer>
          <Label>Played:</Label>
          <Stat>{played}</Stat>

          <Label>Points:</Label>
          <Stat>{points}</Stat>

          <Label>Won:</Label>
          <Stat>{won}</Stat>

          <Label>Drawn:</Label>
          <Stat>{drawn}</Stat>

          <Label>Goals for:</Label>
          <Stat>{gf}</Stat>

          <Label>Goals against:</Label>
          <Stat>{ga}</Stat>

          <Label>Goals difference:</Label>
          <Stat>{gd}</Stat>
        </StatsContainer>
        <ResultsContainer>
          <Results data={results} />
        </ResultsContainer>
      </Body>
    </Container>
  );
}

export default TeamViewBody;
