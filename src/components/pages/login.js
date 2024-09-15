import React, { Component } from 'react';
import LoginComponent from '../project_components/Auth/login_component';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulLoginAuth = this.handleSuccessfulLoginAuth.bind(this);
        this.handleUnsuccessfulLoginAuth = this.handleUnsuccessfulLoginAuth.bind(this);
    }

    handleSuccessfulLoginAuth() {
        this.props.handleSuccessfulLogin();

        // redirect user to home page
        this.props.history.push('/');
    }

    handleUnsuccessfulLoginAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div>
                <LoginComponent
                    handleSuccessfulLoginAuth={this.handleSuccessfulLoginAuth}
                    handleUnsuccessfulLoginAuth={this.handleUnsuccessfulLoginAuth} />
            </div>
        );
    };
}