## Authentication: First steps

We'll now create the two forms that will collect our data. First, we'll create a folder in the **project_component** section called **Auth**. Inside of there, we'll create our two components, one for logging in and the other for signing up. These components will be (later) exported into our pages section, inside the login and sign up pages respectively. The components will store all of the logic.

## Creating the forms

First, we'll create the forms, and will import them from their respective pages.

**Sign up form**

```
import React, {Component} from "react";

export default class SignupComponent extends Component {
    constructor() {
        super();
}
    render() {
        return (
        <div>
            <form>
                <input type="email" placeholder="Enter your email"></input>
                <input type="text" placeholder="Enter your username"></input>
                <input type="password" placeholder="Enter your password"></input>
                <button className="btn" type="submit"> Sign up </button>
            </form>
        </div>
        );
    };
}
```

```
import React, { Component } from 'react';
import SignupComponent from '../project_components/Auth/signup_component';

export default class Signup extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <SignupComponent/>
        </div>
        );
    };
}
```


**Login form**

```
import React, {Component} from "react";

export default class LoginComponent extends Component {
    constructor() {
        super();
}
    render() {
        return (
        <div>
            <form>
                <input type="text" placeholder="Enter your username"></input>
                <input type="password" placeholder="Enter your password"></input>
                <button className="btn" type="submit"> Login </button>
            </form>
        </div>
        );
    };
}
```

```
import React, { Component } from 'react';
import SignupComponent from '../project_components/Auth/signup_component';

export default class Login extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <LoginComponent/>
        </div>
        );
    };
}
```

For the sake of clarity we'll separate the login and sign up related codes, giving each one a separate file, despite the process being similar. The codes themselves are found in the **login_component.js** and **signup_component.js** files, so all the work will be there.

