import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
        // Reverse State of is Completed
        // Call passed down parent method to also change state of parent component
    }

    render() {
        return (

                <span onClick={this.handleCLick}>
                    <FontAwesomeIcon icon={faCheck} size="2x" />
                </span>
        
        );
    }
}