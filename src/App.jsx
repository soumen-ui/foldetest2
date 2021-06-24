import React from "react";
//import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { pink, red, green, deepPurple, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0c0116",
      contrastText: "#fff"
    },

    secondary: {
      main: "#db5660",

      contrastText: "#ffffff"
    }
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Footer /> */}
          <main>
            <Switch>
              {/*
                          <Route exact path="/" component={Home} />
                          <Route exact path="/pages/About/about" component={About} /> 
                      */}

              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/about" exact>
                <About />
              </Route>

              <Route path="/contact" exact>
                <Contact />
              </Route>

              {/*
                        <Route exact path="/contact" component={Contact} />
                      */}

              <Redirect component to="/ " />
            </Switch>
          </main>
        </Router>
        <Navbar />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
