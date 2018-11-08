//Individual Task Component

import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faUser, faTasks, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import { put, destroy } from '../utils/fetch';

import OptionsIcon from './OptionsIcon';
import Checkbox from './Checkbox';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //setting passed prop object into state
            topic: this.props.data.topic,
            text: this.props.data.text,
            location: this.props.data.location,
            time: this.props.data.time,

            icon: faTasks,

            isCompleted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.determineIcon = this.determineIcon.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }

    componentDidMount() {
        // Dynamically set the tasks's icon based on the topic
        this.determineIcon();
    }

    // Handle what happens when task is checked as completed
    async handleCompletion() {
        // Toggling value of isCompleted
        await this.setState(prevState => ({
            isCompleted: !prevState.isCompleted
        }));

        if (this.state.isCompleted) {
            // fade with opacity
            $(`#task-${this.props.id}`).addClass('delete');
            // make DELETE request
            setTimeout(() => {
                $(`#task-${this.props.id}`).remove();
            }, 750);
            destroy(`/api/list/${this.props.id}`)
                .then((res) => {
                    console.log(res);
                })
                .catch(e => console.log(e));
            // display good job

        }
    }

    determineIcon() {
        let topic = this.state.topic;
        if (topic === "Work") {
            this.setState({
                icon: faBriefcase
            });
            return;
        } else if (topic === "Personal") {
            this.setState({
                icon: faUser
            });
            return;
        } else if (topic === "Family") {
            this.setState({
                icon: faUsers
            });
            return;
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
        e.preventDefault();

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
            <article id={`task-${this.props.id}`} className="card border-primary mb-2">

                <div className="card-body p-2 shadow">

                    <div className="container-fluid d-flex justify-content-between">
                        <FontAwesomeIcon icon={this.state.icon} size="2x" className="text-contrast" />

                        <span data-toggle="tooltip" data-placement="left" title="Update" className="upload" onClick={this.handleSubmit}>
                            <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                        </span>

                    </div>

                    <form className="form-group" onSubmit={this.handleSubmit}>

                        <input
                            className="form-control form-control-lg"
                            name="text"
                            value={this.state.text}
                            placeholder="What do you need to do?"
                            onChange={this.handleChange}
                        >
                        </input>

                        <input
                            className="text-muted form-control"
                            name="location"
                            value={this.state.location}
                            placeholder="Where"
                            onChange={this.handleChange}
                        >
                        </input>

                        <input
                            className="text-muted form-control"
                            name="time"
                            value={this.state.time}
                            placeholder="Time"
                            onChange={this.handleChange}
                        >
                        </input>

                    </form>

                    <Checkbox onClick={this.handleCompletion} />

                </div>

            </article>
        );
    }
}

export default Task;