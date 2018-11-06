//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    contructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <h1>Text {this.props.id}: {this.props.text}</h1>
        );
    }
}