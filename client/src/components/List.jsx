// List component
// Will call api for data, map over data, create list of Task components

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as Fetch from '../utils/fetch.js';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Task from './Task';

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
        Fetch.get('/api/list')
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
            return <Task key={task.id} id={task.id} data={task} />
        });
        return taskList;
    }




    render() {

        //initializing tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        return (
            <Fragment>
                <aside className="col-md-8 pt-3 bg-light">

                    <div className="row justify-content-between">

                        <h2 className="col-9 text-primary">To Do</h2>

                        <span className="col-2">
                            <Link to="/input" className="add-task" alt="add task" data-toggle="tooltip" data-placement="top" title="Add Task">
                                <FontAwesomeIcon icon={faPlus} size="2x" />
                            </Link>
                        </span>

                    </div>

                    {this.createList()}

                    <h6 className="col-sm-2 text-muted my-2 py-1">{this.state.toDolist.length} Tasks</h6>

                </aside>
            </Fragment>
        );
    }

}