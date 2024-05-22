import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Biografia from './pages/Biografia';
import Campanhas from './pages/Campanhas';
import Contato from './pages/Contato';

const GlobalStyle = createGlobalStyle`
  :root{
    --black: #000;
    --white: #FFF;
    --gray: #708090;
  }
  
  body {
    background-color: var(--black);
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  border: 2px solid var(--gray);
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Container>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Container>
  </Router>
);

export default App;
