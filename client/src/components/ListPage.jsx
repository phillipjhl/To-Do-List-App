import React, { Component, Fragment } from 'react';

export default class ListPage extends Component {
    contructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            list: []
        }
    }

    componentDidMount() {
        //make api call for list
        //map over lsit to render list of task, set it to state
    }

    render() {
        return (
            <h1 className="text-primary">List Page</h1>
        );
    }

}