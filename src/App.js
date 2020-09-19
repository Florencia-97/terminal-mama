import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ExpensasListado from './ExpensasListado';
import ExpensasCrear from './ExpensaCrear';
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
                <Route path="/expensas" exact component={ExpensasListado} />
                <Route path="/expensas/crear" component={ExpensasCrear} />
                <Route path="/expensas/listado" component={ExpensasListado} />
              </Switch>
            </Box>
          </div>
      </ThemeProvider>
    </Router>
  )
}

export default App;
