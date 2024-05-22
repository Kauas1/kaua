import React from 'react';
import styled from 'styled-components';
import capa from '../assets/capa.jpg';

const HeaderContainer = styled.header`
  img {
    width: 100%;
    height: 500px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={capa} alt="imagem de capa" />
  </HeaderContainer>
);

export default Header;
