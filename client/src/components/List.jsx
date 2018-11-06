// List component
// Will call api for data, map over data, create list of Task components

import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';

export default class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            list: []
        }

        //method binding for calling and performance
        this.createList = this.createList.bind(this);
    }

        componentDidMount() {
            $.ajax
            // Call api
            // When done, change isLoading to false
        }

        createList() {
            //create list of Tasks
        }

    


    render() {
        return (
            <h1 className="text-primary col-sm-9">To Do</h1>
        );
    }

}