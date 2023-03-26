import React from 'react'
import './App.css'
import CoinsApi from './Components/Coins/CoinsApi'
import {Container} from 'react-bootstrap'
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";


const theme = {
  firstcolor: "#4F8074",
  secondcolor: "#FFA17A",
};


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <CoinsApi />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App