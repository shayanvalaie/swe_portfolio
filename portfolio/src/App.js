import "./App.css";

import * as React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dropdown from "./components/Dropdown";


export const primaryColor = "#00000";

const theme = createTheme({


  palette: {

    primary: {
      main: primaryColor
    },

  },
  typography: {
    fontFamily: [
      'Prompt'
    ],
  }


});



function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header />

        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>




    </>
  );
}

export default App;
