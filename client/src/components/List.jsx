// List component
// Will call api for data, map over data, create list of Task components

import React, { Component, Fragment } from 'react';

export default class ListPage extends Component {
    contructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="text-primary">List</h1>
        );
    }

}