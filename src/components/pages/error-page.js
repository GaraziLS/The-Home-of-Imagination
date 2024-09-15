import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <div>
            <h1 className="header">Oops, page or generator not found.</h1>
            <h2>Or perhaps you would like to <NavLink exact to="/create" className="link" activeClassName="active-link">create</NavLink> one? If so, <NavLink exact to="/login" className="link" activeClassName="active-link">log in</NavLink> into your account.</h2>


            <h3><NavLink exact to="/" className="link" activeClassName="active-link" >Return to homepage</NavLink> </h3>
        </div>
    );
}