## Using APIs

We'll now start connecting the frontend and the backend using Axios. This will allow us to create data dynamically over time.

First, we'll make a test to ensure everything is working, and we'll do it in the **app.js** file.

```
export default class App extends Component {
  constructor() {
    super();

    Icons()

    this.getAllItemsData = this.getAllItemsData.bind(this)
  }

  getAllItemsData() {
    axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables")
      .then(response => {
        console.log("Items received", response)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    this.getAllItemsData()
```

Now a message should appear in the console. We're going to move this to the **item-container** file, which is the component rendering in the homepage.

```
import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                { id: "1", title: "Races", category: "Characters", slug: "Races" },
                { id: "2", title: "Weapons", category: "Objects", slug: "Weapons" },
                { id: "3", title: "Treasure", category: "Treasure", slug: "Treasure" }
            ],
            isLoading: false

        }


        // Bindings

        this.getAllItemsData = this.getAllItemsData.bind(this)
    }

    // Data Container

    SingleGenerator() {
        return this.data.map(_item => {
            return (< SingleItem key={_item.id} title={_item.title} slug={_item.slug} />)
        })
    }

    // API Connections

    getAllItemsData() {
        axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables")
            .then(response => {
                console.log("Items received", response)
            }).catch(error => {
                console.log(error)
            })
    }


    render() {
        this.getAllItemsData()
```

Now the console should display the axios calling.

<!-- ##TODO: Create a way for me, as an admin, to delete user accounts. TBD when the project is delivered -->


## Rendering data

We've tested our endpoints and they display on console. Now we're going to render them on the screen. To do that, first we'll go to the **item-container.js** file.

We'll remove the bindings and the getAllItemsData method from the render, and will also remove the hardcoded data in the initial state. In the GetAllItemsData method, we'll perform a rename and will now be named GetAllTables. As for the GetAllTablesMethod, we'll put the calling inside a lifecycle hook called ComponentDidMount, which executes right after the component is loaded. So, we have this now:

```
import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true

        }
    }

    // Bindings



    // Data Container

    singleGenerators() {
        return this.state.data.map(_item => {
            return (< SingleItem key={_item.id} title={_item.title} slug={_item.slug} />)
        })
    }

    // API Connections

    getAllTables() {
        axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables")
            .then(response => {
                console.log("Items received", response)
            }).catch(error => {
                console.log(error)
            })
    }

    ComponentDidMount() {
        this.getAllTables()
    }

    render() {
        if (this.state.isLoading === true) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h1>All the items go here</h1>
                    {this.singleGenerators()}
                </div>
            );
        };
    }
}
```

Inside the getAllTables method, we'll now set state, and pull in the data object from the console response from the API to populate the data. The isLoading method turns to false when the data is loaded.

```
import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';

export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true

        };

        // Bindings

        // this.getAllTables = this.getAllTables.bind(this);

    };


    // API Connections

    getAllTables() {
        axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables")
            .then(response => {
                this.setState({ data: response.data, isLoading: false })
            }).catch(error => {
                console.log(error)
            });
    };

    // Data Container
    singleGenerator() {
        return this.state.data.map(item => {
            return (< SingleItem item_id={item.item_id} title={item.item_title} content={item.item_content} slug={item.item_title} category={item.item_category} />)
        })
    }


    componentDidMount() {
        this.getAllTables()
    }

    render() {
        if (this.state.isLoading === true) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h2>Welcome</h2>

                    Filter section
                    <button>Characters</button>
                    <button>Objects</button>
                    <button>Quests</button>
                    <button>Skills</button>
                    <button>World</button>
                    <button>Other</button>
                    <button>Filter All</button>

                    <div className="items-wrapper">{this.singleGenerator()}</div>
                </div>
            );
        };
    }
}
```

Now we need to modify the SingleItem's props (in the calling) to pass in the fields that were designed in the API.

```
singleGenerator() {
        return this.state.data.map(_item => {
            return (< SingleItem key={_item.item_id} title={_item.item_title} content={_item.item_content} slug={_item.item_title} />)
        })
    }
```

Now the items will be rendered.

> A key is needed to distinguish between items. Item ids, which autoincrement, are ideal for that.



