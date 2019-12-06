import React from 'react';

import { Container, LinkMenu } from './styles';

function Header() {
  return (
    <Container>
      <LinkMenu to="/table">Table</LinkMenu>
      <LinkMenu to="/weeks/1">Weeks</LinkMenu>
    </Container>
  );
}

export default Header;
