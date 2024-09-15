import React, { Component } from 'react';
import axios from "axios";
import GeneratorList from "../Creation_Page/generator-list";
import GeneratorForm from "../Item_Components/generator-form"


export default class CreationManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomGeneratorList: [],
            editGenerator: {}
        };

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this)
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this)
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        this.handleEditItem = this.handleEditItem.bind(this)
        this.handleClearEditItem = this.handleClearEditItem.bind(this)
    }


    handleEditItem(item) {
        this.setState({
            editGenerator: item
        })
    }

    handleClearEditItem() {
        this.setState({
            editGenerator: {}
        })
    }

    handleDeleteItem(item) {
        axios.delete(`https://devcamp-fullstack-project-backend.onrender.com/tables/${item.item_id}`, { withCredentials: true })
            .then(_response => {
                this.setState({
                    randomGeneratorList: this.state.randomGeneratorList.filter(i => i.item_id !== item.item_id)
                });
            })
            .catch(error => {
                console.log("error deleting", error)
            });
    };

    handleEditFormSubmission() {
        console.log("edit form")
        this.getRandomTables();
    }

    handleNewFormSubmission(item) {
        this.setState({
            randomGeneratorList: [item].concat(this.state.randomGeneratorList)
        })
    }

    handleFormSubmissionError(error) {
        console.log("error", error)
    }

    getRandomTables() {
        axios.get('https://devcamp-fullstack-project-backend.onrender.com/tables', { withCredentials: true })
            .then(response => {
                this.setState({
                    randomGeneratorList: [...response.data]
                });
            })
            .catch(error => {
                console.log('Error in the API', error);
            });
    }

    componentDidMount() {
        this.getRandomTables();
    }
    render() {
        return (
            <div>
                <div className="creation-manager-wrapper">
                    <div className="upper-part-wrapper">
                        <GeneratorForm
                            handleNewFormSubmission={this.handleNewFormSubmission}
                            handleEditFormSubmission={this.handleEditFormSubmission}
                            handleFormSubmissionError={this.handleFormSubmissionError}
                            handleEditItem={this.state.editGenerator}
                            handleClearEditItem={this.handleClearEditItem}
                        />
                    </div>
                    <div className="lower-part-wrapper">
                        {this.state.randomGeneratorList.map(item => {
                            return (<GeneratorList key={item.item_id} data={item}
                                handleDeleteItem={this.handleDeleteItem}
                                handleEditItem={this.handleEditItem}
                                handleClearEditItem={this.handleClearEditItem}
                            />)
                        })}

                    </div>
                </div>
            </div>
        );
    };
}