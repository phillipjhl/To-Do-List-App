//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <h1>Text {this.props.data.id}: {this.props.data.text}</h1>
        );
    }
}

export default Task;