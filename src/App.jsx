import React from 'react'
import './App.css'
import CoinsApi from './Components/Coins/CoinsApi'
import { Container, Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container>
        <CoinsApi />
      </Container>
    </>
  );
};

export default App