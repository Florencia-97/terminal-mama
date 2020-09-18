import React from 'react';
import Expensas from './Expensas';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";


function App() {
  return(
    <Router>
      <ThemeProvider>
        <CSSReset />
          <div className="web-body">
            <Nav />
            <Box p={4}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/expensas" component={Expensas} />
              </Switch>
            </Box>
          </div>
      </ThemeProvider>
    </Router>
  )
}

export default App;
