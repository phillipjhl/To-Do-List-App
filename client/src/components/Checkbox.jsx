import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class Checkboc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false
        }
    }

    handleCLick() {
        // Reverse State of is Completed
        // Call passed down parent method to also change state of parent component
    }

    render() {
        return (

                <span>
                    <FontAwesomeIcon icon={faCheck} size="2x" />
                </span>
        
        );
    }
}