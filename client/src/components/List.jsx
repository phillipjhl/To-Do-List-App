// List component
// Will call api for data, map over data, create list of Task components

import React, { Component, Fragment } from 'react';
import * as Fetch from '../utils/fetch.js';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Task from './Task';
import AddTask from './AddTask';

export default class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            toDolist: []
        }

        //method binding for calling and performance
        this.createList = this.createList.bind(this);
        this.getListLength = this.getListLength.bind(this);
    }

    componentDidMount() {
        // Call api
        Fetch.get('/api/list')
            .then(list => {
                let listData = [];
                for (let key in list) {
                    if (key !== 'nextid') {
                        let data = {
                            id: key,
                            text: list[key].text,
                            topic: list[key].topic,
                            time: list[key].time,
                            location: list[key].location
                        }
                        listData.unshift(data);
                    }
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

    getListLength() {
        let length = this.state.toDolist.length;
        return length;
    }

    render() {

        //initializing tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        if (this.state.isLoading) {
            return (
                <div className="container">
                    
                       <div className="mx-auto col-1 pt-5">
                       <FontAwesomeIcon icon={faSpinner} size="2x" spin />
                       </div>
                    
                </div>
            );
        } else {
            return (
                <Fragment>
                    <aside className="col-md-12 col-lg-12 pt-3 bg-light mx-auto">
    
                        <div className="row justify-content-between">
    
                            <h2 className="col-10 text-primary">To Do</h2>
    
                            <AddTask />
    
                        </div>
    
                        {this.createList()}
    
                        <h6 className="col-sm-3 text-muted my-2 py-1">{this.getListLength()} Tasks To Do</h6>
    
                    </aside>
                </Fragment>
            );
        }
        
    }

}