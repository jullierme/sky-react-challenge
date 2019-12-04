import React, { Component } from 'react';

import {
  Container,
  TeamLeft,
  TeamRight,
  Score,
  ScoreItem,
  ScoreSeparator,
  Logo,
  LogoContainerLeft,
  LogoContainerRight,
} from './style';

// TASK #1 - create result line
const Result = props => {
  const {
    team1Win,
    team2Win,
    logoTeam1,
    logoTeam2,
    team1,
    team2,
    score1,
    score2,
  } = props;
  return (
    <>
      <TeamLeft winner={team1Win}>{team1}</TeamLeft>
      <LogoContainerLeft>
        <Logo src={logoTeam1}></Logo>
      </LogoContainerLeft>
      <Score>
        <ScoreItem>{score1}</ScoreItem>
        <ScoreSeparator />
        <ScoreItem>{score2}</ScoreItem>
      </Score>
      <LogoContainerRight>
        <Logo src={logoTeam2}></Logo>
      </LogoContainerRight>
      <TeamRight winner={team2Win}>{team2}</TeamRight>
    </>
  );
};

class Results extends Component {
  getLogoUrl = id => {
    return `http://acor.sl.pt:7777/logos/${id}`;
  };

  render() {
    if (!this.props.results || !this.props.results.length) {
      return <h1>Not found</h1>;
    }

    const results = [];

    this.props.results.map((item, index) => {
      console.log(item)
      const result = {
        team1Win: item.score[0] > item.score[1],
        team2Win: item.score[0] < item.score[1],
        team1: item.teams[0],
        team2: item.teams[1],
        logoTeam1: this.getLogoUrl(item.teamIds[0]),
        logoTeam2: this.getLogoUrl(item.teamIds[1]),
        score1: item.score[0],
        score2: item.score[1],
        id: index,
      };

      results.push(result);
    });

    return (
      <Container>
        {results.map(result => {
          return (

              <Result key={result.id} {...result} />
            
          );
        })}
      </Container>
    );
  }
}

export default Results;
