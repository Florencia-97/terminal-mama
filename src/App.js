import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import ExpensasListado from './ExpensasListado';
import ExpensasCrear from './ExpensaCrear';
import ReportesListado from './ReportesListado';
import ReporteCrear from './ReporteCrear';
import Login from './Login';
import Local from './Local';
import { auth } from "./services/firebase";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

require('dotenv').config()

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/home" />
          )
      }
    />
  );
}

function Locales({ match }) {
  console.log(match.params);
  return <Local porcentaje={match.params.id}/>;
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
        <Router>
        <ThemeProvider>
          <CSSReset />
            <div className="web-body">
              <Nav />
              <Box p={4}>
                <Switch>
                  <Route path="/" exact component={Home} />

                  <PublicRoute
                    path="/login"
                    authenticated={this.state.authenticated}
                    component={Login}
                  />
                  
                  {/* Expensas */}
                  <PrivateRoute path="/expensas" exact component={ExpensasListado} authenticated={this.state.authenticated} />
                  <PrivateRoute path="/expensas/crear" component={ExpensasCrear} authenticated={this.state.authenticated}/>
                  <PrivateRoute path="/expensas/listado" component={ExpensasListado} authenticated={this.state.authenticated}/>
  
                  {/* Reportes mensuales */}
                  <PrivateRoute path="/reportes" exact component={ReportesListado} authenticated={this.state.authenticated}/>
                  <PrivateRoute path="/reportes/crear" component={ReporteCrear} authenticated={this.state.authenticated}/>
                  <PrivateRoute path="/reportes/listado" component={ReportesListado} authenticated={this.state.authenticated}/>

                  {/* Locales */}
                  <PrivateRoute path="/local/:id" exact component={Locales} authenticated={this.state.authenticated} />
  
                </Switch>
              </Box>
            </div>
        </ThemeProvider>
      </Router>
      );
  }
}


export default App;
