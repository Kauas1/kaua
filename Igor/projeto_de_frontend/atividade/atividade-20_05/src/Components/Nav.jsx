import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  text-align: left;
  padding: 20px;
  background-color: #708090;
  font-size: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
  margin-right: 20px;
`;

const Nav = () => (
  <NavContainer>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/biografia">BIOGRAFIA</NavLink>
    <NavLink to="/campanhas">CAMPANHAS PUBLICITÁRIAS</NavLink>
    <NavLink to="/contato">CONTATOS</NavLink>
  </NavContainer>
);

export default Nav;
