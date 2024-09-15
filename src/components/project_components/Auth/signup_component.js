import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: ""
        };

        // Bindings

        this.handleSignupChange = this.handleSignupChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // Handlers

    handleSubmit(event) {
        event.preventDefault()
    }

    handleSignupChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2 className="header">Sign up</h2>

                <form onSubmit={this.handleSubmit} className="signup-form">
                    <FontAwesomeIcon icon="at" className="signup-icon"/>
                    <input
                        className="form-field"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        label="Type your email"
                        value={this.state.email}
                        onChange={this.handleSignupChange}>
                    </input>
                    
                    <FontAwesomeIcon icon="user" className="signup-icon"/>
                    <input
                        className="form-field"
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        label="Type your username"
                        value={this.state.username}
                        onChange={this.handleSignupChange}>
                    </input>

                    <FontAwesomeIcon icon="key" className="signup-icon"/>
                    <input
                        className="form-field"
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        label="Type your password"
                        value={this.state.password}
                        onChange={this.handleSignupChange}>
                    </input>
                    <button type="submit" className="signup-button">Sign up</button>
                </form>
            </div>
        );
    };
}
