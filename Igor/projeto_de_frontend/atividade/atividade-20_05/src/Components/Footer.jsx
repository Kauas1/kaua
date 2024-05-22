import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  color: #FFF;
  padding: 10px;
`;

const Footer = () => (
  <FooterContainer>
    <p>Todos os direitos reservados &copy;2023</p>
  </FooterContainer>
);

export default Footer;
