import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class GeneratorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RawData: this.props.data,
        }

    }

    render() {
        return (
            <div>
                <div className="item-list-wrapper">
                    <div className="items-in-list">
                        <h4>{this.state.RawData.item_id}</h4>
                        <h4>{this.state.RawData.item_title}</h4>
                    </div>

                    <div className="buttons">
                        <button className="generator-list-btn" onClick={() => this.props.handleEditItem(this.state.RawData)}><FontAwesomeIcon icon="pen-to-square"/> Edit</button>
                        <button className="generator-list-btn" onClick={() => this.props.handleDeleteItem(this.state.RawData)}><FontAwesomeIcon icon="trash"/> Delete</button>
                    </div>
                </div>
            </div>
        );
    };
}

