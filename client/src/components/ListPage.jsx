// ListPage Component
// houses jumbotron, list, and any other larger components

import React, { Component, Fragment } from 'react';

import Jumbotron from './Jumbotron';
import List from './List';

export default class ListPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

                <Jumbotron titleOne="Your" titleTwo="Taks" />

                <List />

            </Fragment>
        );
    }

}