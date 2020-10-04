import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ExpensasListado from './ExpensasListado';
import ExpensasCrear from './ExpensaCrear';
import ReportesListado from './ReportesListado';
import ReporteCrear from './ReporteCrear';
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

require('dotenv').config()

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
                
                {/* Expensas */}
                <Route path="/expensas" exact component={ExpensasListado} />
                <Route path="/expensas/crear" component={ExpensasCrear} />
                <Route path="/expensas/listado" component={ExpensasListado} />

                {/* Reportes mensuales */}
                <Route path="/reportes" exact component={ReportesListado} />
                <Route path="/reportes/crear" component={ReporteCrear} />
                <Route path="/reportes/listado" component={ReportesListado} />

              </Switch>
            </Box>
          </div>
      </ThemeProvider>
    </Router>
  )
}

export default App;
