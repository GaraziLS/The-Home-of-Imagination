import React from 'react';
import LoadingIcon from "../../helpers/loading-status";
import { NavLink } from "react-router-dom";


export default function () {
    return (
        <div>
            <h3><LoadingIcon /></h3>

            <h2>This feature will be available once the project is delivered.</h2>
            <h3><NavLink exact to="/" className="link" activeClassName="active-link" >Return to homepage</NavLink> </h3>
        </div>
    );
}