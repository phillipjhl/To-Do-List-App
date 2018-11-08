import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleClick = this.handleClick.bind(this);
    }

    // Reverse State of is Completed
    // Call passed down parent method to also change state of parent component
    handleClick() {
        this.props.onClick();
    }

    render() {
        return (

            <span onClick={this.handleClick} className="check float-right" data-toggle="tooltip" data-placement="left" title="Complete">
                <FontAwesomeIcon icon={faCheck} size="2x" />
            </span>

        );
    }
}