# Intro

This project is the DevCamp Full Stack Capstone project, and this document will explain how all the programming is done. The frontend is built using React, and the backend using Flask. All the icons have text by their side, to allow screen readers work and to make the site accessible to everyone. 

The site is fully responsive. Some pages, such as the login or the generators, don't have media queries because there are few elements there and they already look good during tests.

### Considerations to navigate the site without bugs

* For some reason, when the chrome console is open and you're on the error page (when trying to access the creation page but you're unlogged) the login button doesn't respond. Use the link in that page instead.

* When the console is open and you refresh the page to see the changes that were made, the connection will be refused despite having wifi available. Re-start the server or close the console and reload the page to fix the issue.

* When seeing the page from the responsive mobile view in Chrome, the log in gets refused. Exit the console and log in from the outside to fix the bug.


## First Steps: Building a Navbar

To start off, we'll build a skeleton for the navbar. Inside the **src > Components** we'll create a new folder called **project_components**, where all of our components will be. Inside, we'll create a file named **navbar.js**. This component will be a functional component since it only renders content (the navlinks in this case, plus a searchbar and a login button). We'll also add classes to style everything later on, and since we're rendering navlinks we'll first need to import a few dependencies. So, for now, we should have this:

```
import React from 'react';
import {BrowserRouter as  Router, Switch, Route } from "react-router-dom"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function() {
    return(
    <div className='navbar-wrapper'>
        <div className='navlink-wrapper'>
            <h1>Links go there</h1>
        </div>

        <div className='search-wrapper'>
            <div className='search-bar'>
                <input 
                    type='text'
                    placeholder='Search generators'
                    >
                </input>
            </div>

        <div className='auth'>
            <button>Sign up / Log in</button>
        </div>
            

        </div>

    </div>
    </div>
);
}
```

Now we'll import this from the **app.js** file to render it on screen:

```
import React, { Component } from 'react';
import Navbar from "./project_components/navbar"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
      </div>
    );
  }
}
```

### Adding Routes

We'll now add the routes to the navlinks in the **app.js** file. We'll later connect those with the actual links in the navbar in order to jump between them, but before proceeding we'll first add another folder inside the src > component called **pages**. Here's where the different website pages will be.

Now that we have the pages folder we can start adding the routes in the **app.js** file. In order for them to work, we need some dependencies, as well as to import our pages. So we should get this:

```
import React, { Component } from 'react';
import {BrowserRouter as  Router, Switch, Route } from "react-router-dom";

import Home from "./pages/homepage";
import WhatsThis from "./pages/whats-this";
import CreatePage from "./pages/create";
import ErrorPage from "./pages/error-page"
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import RandomTable from "./pages/generator-item"
import ProfilePage from "./pages/user-profile"
```

Now we'll add the routes, and pass in each page component (that we previously imported):

```
export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
        <Navbar/>

          <Switch>
           <Route exact path="/" component={Home} />
            <Route exact path="/whats-this" component={WhatsThis} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/tables/:slug" component={RandomTable} />
            <Route exact path="/users/:slug" component={ProfilePage}/>
            <Route component={ErrorPage} />
          </Switch>

        </Router>
        
      </div>
    );
  }
}

```

Note that the last item doesn't have a path. That's because if no path is provided, or if a wrong one is entered, this will be the default page. In other words, this is what will pop up if there's an error. We also moved the Navbar component inside the router to avoid issues. In order to make the actual links work, we'll now go back to the **navbar.js** file to add the navlinks. We'll also add class names to style them later.

```
<div className='navbar-wrapper'>
    <div className='navlink-wrapper'>
        <NavLink exact to="/" className="link" activeClassName="active-link">Home</NavLink>
        <NavLink exact to="/whats-this" className="link" activeClassName="active-link">What's this?</NavLink>
        <NavLink exact to="/create" className="link" activeClassName="active-link">Create</NavLink>
        <NavLink exact to="/users/:slug" className="link" activeClassName="active-link">Create</NavLink>>
```

Now that the links work, it's time to give styles. But first, we'll add the search bar and the login/sign up button.

```
<div className='search-wrapper'>
                <div className='search-field'>
                    <input
                        type='text'
                        placeholder='Search generators'
                    >
                    </input>
                    <button><FontAwesomeIcon icon="magnifying-glass"/> Search</button>
                </div>
            </div>

             <div className='auth-wrapper'>
                <button><NavLink exact to="/signup" className="link signup"><FontAwesomeIcon icon="map"/> Sign up </NavLink></button>
                <button><NavLink exact to="/login" className="link login"><FontAwesomeIcon icon="circle-user"/> Log in </NavLink></button>
            </div>
        </div>
```

### Giving styles to the Navbar

We already added classes to give styles (remember that the styles folder is in **src > style**, we will put all of our styles there.)

We already have a file inside the styles folder called **main.scss**. Here we'll import all the stylesheets, so we'll begin by creating four more files (one for the navbar, one for the general styles for the entire app and one for mixins -reusable pieces of css code-, and one for storing our color codes as variables) that will be imported by the main.scss file:

```
@import "../style/variables.scss";
@import "../style/base-styles.scss";
@import "../style/mixins.scss";
```

Now we're ready to start giving styles, including media queries to make the site responsive, so we'll create a scss file named **navbar.scss**. We'll also create a **mixins.scss** stylesheet to create consistent styles for buttons and links, among others.

The navbar wrapper is a grid, and each of the elements inside it is a flex or a grid container to ease positioning.

Now the navbar is finished and is fully responsive.

## Adding Icons

Let's add a few icons to the app. To do this, we'll import Font Awesome in a dedicated file. In the src folder we'll create a new folder called **helpers**, and inside of it we'll create a file called **icons.js**. After installing Font Awesome (by writing ``npm i font-awesome`` in the terminal -don't forget to switch to the project folder-), we'll type this in our **icons.js** file:

```
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIconName, faIconName (...) } from "@fortawesome/free-solid-svg-icons";
```

In the last import we'll write the codes of the Font Awesome Icons. Then, we need to add them to the library. We're in a separate file, so we'll use a const. I've put all of the icons I'll be using, so some of them won't be used till much later: 

```
const Icons = () => {
    library.add(faHouse, faMagnifyingGlass, faWandMagicSparkles, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser, faMap);
}
```

Now, we have to export this:

```
export default Icons;
```

And import it in the **app.js** file:

```
import Icons from "../helpers/icons"
```

We'll call the Icons() method inside the constructor. Now, we can go to the **navbar.js** file, import the icon, and place it, but first we have to import Font Awesome:

```
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```

Now, we can place icons where we want. To do so we must call the FontAwesome component and pass in icon props. The structure is like this:

```
<FontAwesomeIcon icon="icon-name"/>
```

To test that everything's going right, go to the project folder and type ``npm run start``.

## Navbar adjustment

We want the nabvar to stay on top of the page and visible when we're scrolling down. To do this, just type this in the css stylesheet:

```
.navbar-wrapper {
    position: sticky;
    top: 0%;
```



## Creating an API

We need an API to continue with the project, so before proceeding we'll create one. Go to the Backend folder and search for the Project READMEs to know how to create one.

We'll need Axios to connect the frontend with the backend, so install it now: ``npm i axios``.

## Z index to prevent FAQ overlaping

To prevent the FAQ to appear above the navbar, just put the z index of the navbar higher, and that of the FAQ lower.

```
.faq-wrapper .p-accordion .p-component {
 z-index: 500;
}

.navbar-wrapper {
  z-index: 1000;  }
```







