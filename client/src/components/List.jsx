// List component
// Will call api for data, map over data, create list of Task components

import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';

export default class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            toDolist: []
        }

        //method binding for calling and performance
        this.createList = this.createList.bind(this);
    }

        componentDidMount() {
            // Call api
            fetch('/api/list')
                .then(res => res.json())
                .then(list => {
                    let listData = [];
                    for (let i = 0; i < list.nextid; i++) {
                        let task = list[i];
                        let data = {
                            id: i,
                            text: task.text,
                            topic: task.topic,
                            time: task.time,
                            location: task.location
                        }
                        listData.unshift(data);
                    }
                    this.setState({
                        toDolist: listData,
                        isLoading: false
                    });
                })
                .catch(err => console.log(err));
            // When done, change isLoading to false
        }

        createList() {
            //create list of Tasks
            let taskList = this.state.toDolist.map((task) => {
                    console.log(task)
                    return;
                });
            // return taskList;
        }

    


    render() {
        return (
            <Fragment>
                {this.createList()}
            </Fragment>
        );
    }

}