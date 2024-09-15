import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class GeneratorForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_id: "",
            item_title: "",
            item_category: "Characters",
            item_content: "",
            editMode: false,
            apiUrl: "dev-camp-full-stack-project-backend-l2qq.vercel.app/create",
            apiAction: "post"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.handleEditItem !== this.props.handleEditItem &&
            Object.keys(this.props.handleEditItem).length > 0
        ) {
            this.setState({
                item_id: this.props.handleEditItem.item_id || "",
                item_title: this.props.handleEditItem.item_title || "",
                item_category: this.props.handleEditItem.item_category || "",
                item_content: this.props.handleEditItem.item_content || "",
                editMode: true,
                apiUrl: `dev-camp-full-stack-project-backend-l2qq.vercel.app/tables/${this.props.handleEditItem.item_id}`,
                apiAction: "put"
            });

            // Clear the edit item from props
            this.props.handleClearEditItem();
        }
    }

    buildForm() {
        const formData = new FormData();
        formData.append("Item[item_title]", this.state.item_title);
        formData.append("Item[item_content]", this.state.item_content);
        formData.append("Item[item_category]", this.state.item_category);

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                if (this.state.editMode) {
                    this.props.handleEditFormSubmission();
                } else {
                    this.props.handleNewFormSubmission(response.data);
                }

                // Reset the form state
                this.setState({
                    item_id: "",
                    item_title: "",
                    item_category: "Characters",
                    item_content: "",
                    editMode: false,
                    apiUrl: "dev-camp-full-stack-project-backend-l2qq.vercel.app/create",
                    apiAction: "post"
                });
            })
            .catch(error => {
                console.log("Something went wrong", error);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="creation-form-wrapper">
                    <input
                        className="form-field name-field"
                        type="text"
                        name="item_title"
                        placeholder="Generator name"
                        label="Generator name"
                        value={this.state.item_title}
                        onChange={this.handleChange}
                    />
                    <select
                        className="form-field category-field"
                        name="item_category"
                        label="item_category"
                        value={this.state.item_category}
                        onChange={this.handleChange}
                    >
                        <option value="Characters" label="Characters">Characters</option>
                        <option value="Objects" label="Objects">Objects</option>
                        <option value="Quests" label="Quests">Quests</option>
                        <option value="Skills" label="Skills">Skills</option>
                        <option value="World" label="World">World</option>
                        <option value="Other" label="Other">Other</option>
                    </select>
                    <textarea
                        className="form-field data-field"
                        name="item_content"
                        placeholder="Write your generator's content here. Use commas (,) to separate values, please."
                        label="Write your generator's content here. Use commas (,) to separate values, please."
                        value={this.state.item_content}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="creation-button"><FontAwesomeIcon icon="floppy-disk"/> Save Generator</button>
                </form>
            </div>
        );
    }
}
