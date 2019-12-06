import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-row-gap: 15px;
  margin-top: 10px;
`;

export const ResultsContainer = styled.div`
  margin-top: 15px;
`;

export const WeeksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Week = styled(Link)`
  font-size: 1em;
  width: 1.5em;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  margin: 5px 5px;
  font-weight: 900;
  text-align: center;
  background-color: ${props => (props.selected ? '#37003c' : '#fbfbfb')};
  color: ${props => (props.selected ? '#FFF' : '#37003c')};
`;
