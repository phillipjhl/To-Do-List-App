//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faUser, faTasks } from '@fortawesome/free-solid-svg-icons';

import { put } from '../utils/fetch';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //setting passed prop object into state
            topic: this.props.data,
            text: this.props.data.text,
            location: this.props.data.location,
            time: this.props.data.time,

            icon: null,

            isCompleted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    determineIcon() {
        let topic = this.state.topic;
        let icon = this.state.icon;
        if (topic == "work") {
            let icon = faBriefcase;
            return;
        } else if (topic == "family") {
            let icon = faUsers;
            return;
        } else if (topic == "personal") {
            let icon = faUser;
        } else {
            let icon = faTasks;
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        // e.preventDefault();

        let data = {
            topic: this.state.topic,
            text: this.state.text,
            location: this.state.location,
            time: this.state.time
        };

        put(`/api/list/${this.props.id}`, data)
            .then(() => {
                console.log('here');
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <article className="card border-primary">

                <div className="card-body pb-1">

                    <form className="form-group" onSubmit={this.handleSubmit}>

                            <input
                                className="form-control"
                                name="text"
                                value={this.state.text}
                                placeholder={this.state.text}
                                onChange={this.handleChange}
                            >
                            </input>

                        <input
                            className="text-muted form-control"
                            name="location"
                            value={this.state.location}
                            placeholder={this.state.location}
                            onChange={this.handleChange}
                        >
                        </input>

                        <input
                            className="text-muted form-control"
                            name="time"
                            value={this.state.time}
                            placeholder={this.state.time}
                            onChange={this.handleChange}
                        >
                        </input>

                        {/* <div className="form-row">
                            <button type="button" className="btn btn-primary w-100 mx-auto" onClick={this.handleSubmit}>Add New Task</button>
                        </div> */}

                    </form>

                </div>

            </article>
        );
    }
}

export default Task;