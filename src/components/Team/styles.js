import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e1e1;
  padding: 20px;
  img {
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 30px;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: max-content;
  grid-row-gap: 10px;
`;

export const ResultsContainer = styled.div``;

export const Label = styled.div`
  text-align: right;
  margin-right: 15px;
  font-size: 1.2em;
  font-weight: 900;
`;

export const Stat = styled.div`
  text-align: left;
  font-size: 1.2em;
`;
