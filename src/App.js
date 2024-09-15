import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/homepage";
import WhatsThis from "./components/pages/whats-this";
import CreatePage from "./components/pages/create";
import ErrorPage from "./components/pages/error-page";
import SignupPage from "./components/pages/signup";
import LoginPage from "./components/pages/login";
import RandomTable from "./components/project_components/Item_Components/random-table"
import ProfilePage from "./components/pages/user-profile"

import Navbar from "./components/project_components/navbar";
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables" element={<Home />} />
            <Route path="/whats-this" element={<WhatsThis />} />
            {this.state.LoginStatus === "LOGGED_IN" && this.AuthorisedPages()}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage 
              handleSuccessfulLogin={this.handleSuccessfulLogin} 
              handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} 
            />} />
            <Route path="/tables/:slug" element={<RandomTable />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    );
  };
}