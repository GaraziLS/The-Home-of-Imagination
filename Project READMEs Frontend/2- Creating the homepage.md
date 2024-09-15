## Creating an item container for the homepage

In the **src > project_components** folder, we've created another folder called Site Container, and inside it we'll create a file called **item-container.js** This component will be embeded in the homepage and will store our random generators. Right now no items will appear, but we can start by doing the page structure. We'll also import from here each individual item, so we should get this:

```
import React, { Component } from 'react';
import ItemContainer from '../project_components/Site Container/item-container';

export default class ItemContainer extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <ItemContainer/>
        </div>
        );
    };
}
```

## Creating a custom function that creates a component for each item

We're hardcoding (temporarily) some data now. Inside the **ItemContainer** component, we'll create a function that stores data. We'll then add a function that returns each individual item. 

> Looping through data and then rendering it is quite common, to avoid hardcoding and to generate things dynamically. To do this in React we'll use the map function (this function always returns something). _item is underscored to avoid the declared but never used error.

```
RandomTables() {
        const data = ["Characters", "Weapons", "Treasure"];
        return data.map(_item => {
            return <RandomTable/>; })
    }
```

> Later renamed to SingleGenerator() and to SingleItem.

Yes, in react you can return components inside functions.

In order to render this we need to use curly brackets, because when you want to slide some JavaScript code into your render function here, you need to use curly brackets, and we are rendering the function that has a component inside it:

```
render() {
        return (
            <div>
                <h2>Portfolio Container</h2>
                <div>{RandomTables()}</div> // <---- Functional component (RandomTables) called via function with curly brackets
            </div>
```

So we would get this:

```
export default class ItemContainer extends Component {
    constructor() {
        super();
    }

RandomTables() {
        const data = ["Characters", "Weapons", "Treasure"];
        return data.map(_item => {
            return <RandomTable/>;
        })
    }

    render() {
        return (
            <div>
                <h1>All the items go here</h1>
                {this.RandomTables()}
            </div>
        );
```

The function, right now, returns a single component. We need to loop through each item. So that function will become this:

```
RandomTables() {
        const data = ["Characters", "Weapons", "Treasure"];
        return data.map(_item => {
            return <h1>{_item}</h1>;;
        })
    }
```

And now we'll see each data item separately. If we call the component instead of the item, we'll see repeated 3 times.

### Props (properties)

Props (short for properties) are the way that you can pass data from one parent component to a child component. 
When you're passing in a prop is to define it directly in line within the component that's being called. In the **item-container** file, we'll write:

```
export default class ItemContainer extends Component {
    constructor() {
        super();
    }

    RandomTables() {
        const data = ["Characters", "Weapons", "Treasure"];
        return data.map(_item => {
            return <SingleItem key={_item.id} title={_item.} slug={_item.title} />;
        })
```

> Unique keys must be passed too (in this case we return the item and the id) in data collections to avoid issues.
> Note that we're working inside a function that's being called later on.

Now we need the component itself to be able to render the prop in the page We'll go to the **single-item** file, a functional component: 

```
export default function SingleItem(props) {
    return (
        <div>
            <Link to={`/tables/${props.item_id}`}>{props.slug}</Link>
        </div>
    );
}
```

Now three items are rendered, and are displaying the data.

## Creating state

As long as the components are class-based, they have the ability to manage their own state. We'll set state for our item container page, to create a loading screen via a conditional (we're in the **item-container** page):

```
this.state = {
     data: [],
    isLoading: true
        }

 render() {
        if (this.state.isLoading === true) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h1>All the items go here</h1>
                    {this.RandomTables()}
                </div>
```   

>  In JavaScript, = is used to assign a value to a variable, while == and === are used to compare values. When you use if (this.state.isLoading = true), you are assigning true to this.state.isLoading and the result of the assignment (true) is evaluated in the if statement, making the condition always true, so the loading part would always load.

> This loading state starts at true and becames false when the API request is fulfilled.

```
getAllTables() {
        axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables")
            .then(response => {
                this.setState({ data: response.data, isLoading: false })
            }).catch(error => {
                console.log(error)
            });
```

## Adding props to the random-table file
We'll now add props to each specific generator (**random-table.js** file). But first, we need to add those to the route in the **app.js** file.

```
<Route exact path="/tables/:slug" component={RandomTable} />
```

Now we'll work in the component itself (**random-table**) and pass props:

```
export default class RandomTable extends Component {
    constructor(props) {
        super(props);

}
    render() {
        return (
        <div>
            <h1>Random table for {this.props.title}</h1>
        </div>

```

> Later converted to a functional component.

Now if we add the /tables/whatever to the route in the searchbar, we'll get that individual component, but we actually need to go to that url. We'll modify the **item-container.js** file to modify the data:

```
RandomTables() {
    const data = [
        {title: "Races", slug: "first", category: "Characters"},
        {title: "Weapons", slug: "second", category: "Objects"},
        {title: "Treasure", slug: "first", category: "Objects"}
    ];
}
```

Now we'll pass the slug prop to the calling of the component:

```
return data.map(item => {
            return < SingleItem item_id={item.item_id} title={item.item_title} content={item.item_content} slug={item.item_title} category={item.item_category} /> />;
```

Now we will pass this prop to the component itself, in **random-table.js** file:

```
import React from 'react';

export default function (props) {
    return (
        <div>
            {props.match.params.slug}
        </div>
    );
}
```


Now the links point to each item. To finish the Homepage, we'll call the ItemContainer component there.

```
export default function () {
    return (
        <div>
            <ItemContainer />
        </div>
    );
}
```



