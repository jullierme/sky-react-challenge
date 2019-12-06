import styled from 'styled-components';

export const TableOfResults = styled.table`
  width: 100%;
  text-align: center;
  font-size: 1rem;
`;

export const Thead = styled.thead`
  background-color: #fbfbfb;

  th {
    color: #6c6c6c;
    font-size: 1rem;
    padding: 10px 0;
  }
`;

export const Tbody = styled.tbody``;

export const TdTeam = styled.td`
  text-align: left;

  img {
    height: 30px;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
  }
`;
