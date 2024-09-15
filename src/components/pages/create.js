import React, { Component } from 'react';
import CreationManager from "../project_components/Creation_Page/creation-manager"

export default class CreatePage extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <CreationManager />
            </div>
        );
    };
}