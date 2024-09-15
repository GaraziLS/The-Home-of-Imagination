import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/homepage";
import WhatsThis from "./pages/whats-this";
import CreatePage from "./pages/create";
import ErrorPage from "./pages/error-page";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import RandomTable from "./project_components/Item_Components/random-table"
import ProfilePage from "./pages/user-profile"

import Navbar from "./project_components/navbar";
import Icons from "./helpers/icons";



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LoginStatus: "NOT_LOGGED_IN"
    }

    Icons()

    // Bindings

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      LoginStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      LoginStatus: "NOT_LOGGED_IN"
    });
  }

  AuthorisedPages() {
    return [
      <Route exact path="/create" component={CreatePage} />,
      <Route exact path="/users/:slug" component={ProfilePage} />
    ]
  }

  render() {
    return (
      <div className='app'>

        <Router>

          <Navbar LoggedInStatus={this.state.LoginStatus} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tables" component={Home} />
            <Route exact path="/whats-this" component={WhatsThis} />
            {this.state.LoginStatus == "LOGGED_IN" ? this.AuthorisedPages()[0] : null}
            {this.state.LoginStatus == "LOGGED_IN" ? this.AuthorisedPages()[1] : null}
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login"
              render={props => (
                <LoginPage
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} />
              )}
            />
            <Route exact path="/tables/:slug" component={RandomTable} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  };
}