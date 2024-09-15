import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from "../project_components/Search_Bar/search-bar";


export default function (props) {
    return (
        <div className='navbar-wrapper'>
            <div className='navlink-wrapper'>
                <NavLink exact to="/" className="link" activeClassName="active-link"><FontAwesomeIcon icon="home" /> Home</NavLink>
                <NavLink exact to="/whats-this" className="link" activeClassName="active-link"><FontAwesomeIcon icon='circle-info' /> About this site</NavLink>

                {props.LoggedInStatus === "LOGGED_IN" ?
                    <NavLink exact to="/create" className="link" activeClassName="active-link"><FontAwesomeIcon icon='magic-wand-sparkles' /> Create</NavLink> : null}

                {props.LoggedInStatus === "LOGGED_IN" ?
                    <NavLink exact to="/users/:slug" className="link" activeClassName="active-link"><FontAwesomeIcon icon='id-card' /> Profile</NavLink> : null}

            </div>

            <SearchBar />

            <div className='auth-wrapper'>
                <button><NavLink exact to="/signup" className="link"><FontAwesomeIcon icon="map" /> Sign up </NavLink></button>

                {props.LoggedInStatus === "LOGGED_IN" ?
                    <button><NavLink exact to="/login" className="link"><FontAwesomeIcon icon="right-from-bracket" /> Log out </NavLink></button>
                    :
                    <button><NavLink exact to="/login" className="link"><FontAwesomeIcon icon="circle-user" /> Log in </NavLink></button>}
            </div>
        </div>
    );
}
