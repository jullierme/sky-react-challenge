import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*export const Team = styled(({ winner, ...props }) => <Link {...props} />)`
  font-size: 1em;
  font-weight: 900;
  line-height: 2rem;
  font-weight: ${props => (props.winner ? 'bold' : 'normal')};
`;*/

export const Team = styled(Link)`
  font-size: 1em;
  font-weight: 900;
  font-weight: ${props => (props.winner ? 'bold' : 'normal')};

  &:hover {
    font-weight: 900;
    color: #ff2882;
  }
`;

export const TeamLeft = styled(Team)`
  text-align: right;
`;

export const TeamRight = styled(Team)`
  text-align: left;
`;

export const Logo = styled.img`
  height: 2em;
  border: none;
`;

export const LogoContainerLeft = styled.div`
  text-align: right;
  padding-right: 10px;
`;

export const LogoContainerRight = styled.div`
  text-align: left;
  padding-left: 10px;
`;

export const Score = styled.span`
  text-align: center;
  line-height: 35px;
  max-height: 35px;
  background: #37003c;
  color: #fff;
  font-weight: 400;
  font-size: 1em;
`;

export const ScoreItem = styled.span``;

export const ScoreSeparator = styled.span`
  background: linear-gradient(270deg, #ff2882, #963cff 45%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  padding: 0 0.03rem;
  margin: 0 0.5em;
`;
