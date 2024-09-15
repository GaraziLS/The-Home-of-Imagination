import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenData from "../Item_Components/gen-data";


export default class RandomTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RandomTableContent: []
        }

        this.getTable = this.getTable.bind(this);
    }

    getTable(item_id) {
        axios.get("dev-camp-full-stack-project-backend-l2qq.vercel.app/tables/" + item_id)
            .then(response => {
                this.setState({ RandomTableContent: response.data });
                const { RandomTableContent } = this.state
                RandomTableContent.item_content = this.state.RandomTableContent.item_content.split(",")
            }).catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getTable(this.props.match.params.slug);
    }

    render() {
        const { RandomTableContent } = this.state
        return (
            <div className="random-table-wrapper">
                <div className="gen-style">{RandomTableContent.item_title}</div>
                <div className="gen-style"><GenData key={RandomTableContent.item_id} item_id={RandomTableContent.item_id} content={RandomTableContent.item_content} /></div>
                <div className="gen-style"><button className="roll-button" onClick={() => window.location.reload()}> <FontAwesomeIcon icon="dice"/> Roll!</button></div>
            </div>
        );
    };
}