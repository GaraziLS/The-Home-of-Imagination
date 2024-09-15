import React, { Component } from "react";
import axios from "axios";
import LoadingIcon from "../../../../src/helpers/loading-status";

export default class GenData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            contentArray: [],
            error: "",
            loading: true
        };

        this.getData = this.getData.bind(this);
        this.randomizer = this.randomizer.bind(this);
    }

    getData() {
        if (!this.props.item_id) {
            this.setState({ error: "Item ID is missing", loading: false });
        } else {
            axios.get(`dev-camp-full-stack-project-backend-l2qq.vercel.app/tables/${this.props.item_id}`)
                .then(response => {
                    const data = response.data;
                    const contentArray = data.item_content.split(","); // Split the item_content into an array

                    this.setState({
                        data: data,
                        contentArray: contentArray, // Store the array in the state
                        loading: false
                    });
                })
                .catch(error => {
                    console.log('Error in the API:', error);
                    this.setState({ error: error.message, loading: false });
                });
        }
    }

    componentDidMount() {
        this.getData();
    }

    randomizer() {
        const { contentArray } = this.state;
        return contentArray[Math.floor(Math.random() * contentArray.length)];
    }

    render() {
        const { data, error, loading } = this.state;

        if (loading) {
            return <LoadingIcon /> // Show loading state until data is fetched
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!data) {
            return <div>No data found</div>; // Handle case where no data is returned
        }

        return (
            <div className="random-result"><h2>{this.randomizer()}</h2></div>
        )
    }
}
