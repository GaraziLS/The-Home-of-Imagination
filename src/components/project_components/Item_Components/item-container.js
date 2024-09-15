import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';
import LoadingIcon from "../../../helpers/loading-status";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { Accordion, AccordionTab } from 'primereact/accordion'

export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true

        };

        // Bindings

        this.getAllTables = this.getAllTables.bind(this);
        this.singleGenerator = this.singleGenerator.bind(this);
        this.handleFilter = this.handleFilter.bind(this)

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
            return (< SingleItem key={item.item_id} item_id={item.item_id} title={item.item_title} content={item.item_content} slug={item.item_title} category={item.item_category} />)
        })
    }

    componentDidMount() {
        this.getAllTables()
    }

    handleFilter(filter) {
        if (filter === "Filter All") {
            return this.getAllTables();
        } else {
            this.setState(prevState => ({
                data: prevState.data.filter(
                    item => item.item_category === filter
                )
            })
            )
        }
    }

    render() {
        if (this.state.isLoading === true) {
            return <h3><LoadingIcon /></h3>
        } else {
            return (
                <div>
                    <div>
                        <h3>Welcome to the</h3>
                        <h1>HOME OF IMAGINATION</h1>
                        <h5>(<NavLink className="link" exact to="/whats-this">Click here to learn how this site works</NavLink>)</h5>
                    </div>

                    <div className="homepage-wrapper">
                        <div className="filter">
                            <Accordion>
                                <AccordionTab header="Filters">
                                    <button onClick={() => this.handleFilter("Characters")}><FontAwesomeIcon icon="people-group" /> Characters</button>
                                    <button onClick={() => this.handleFilter("Objects")}><FontAwesomeIcon icon="flask" /> Objects</button>
                                    <button onClick={() => this.handleFilter("Quests")}><FontAwesomeIcon icon="scroll" /> Quests</button>
                                    <button onClick={() => this.handleFilter("Skills")}><FontAwesomeIcon icon="book" /> Skills</button>
                                    <button onClick={() => this.handleFilter("World")}><FontAwesomeIcon icon="earth-europe" /> World</button>
                                    <button onClick={() => this.handleFilter("Other")}><FontAwesomeIcon icon="box-open" /> Other</button>
                                    <button onClick={() => this.handleFilter("Filter All")}><FontAwesomeIcon icon="filter" /> Filter All</button>
                                </AccordionTab>
                                </Accordion>
                            
                        </div>
                        <div className="items-wrapper link">{this.singleGenerator()}</div>
                    </div>
                </div>
            );
        };
    }
}