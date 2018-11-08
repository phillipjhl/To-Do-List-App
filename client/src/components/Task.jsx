//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faUser, faTasks, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { put } from '../utils/fetch';

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
    }
    
    componentDidMount() {
        // Dynamically set the tasks's icon based on the topic
        this.determineIcon();
    }

    // Handle what happens when task is checked as completed
    handleCompletion() {
        // Toggling value
        this.setState(prevState => ({
            isCompleted: !prevState.isCompleted
          }));
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
            <article className="card border-primary mb-2">

                <div className="card-body p-2 shadow">

                    <div className="container-fluid d-flex justify-content-between">
                        <FontAwesomeIcon icon={this.state.icon} size="2x" />

                        {/* Options Component */}
                    </div>

                    <form className="form-group" onSubmit={this.handleSubmit}>

                        <input
                            className="form-control form-control-lg"
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

                    </form>

                </div>

            </article>
        );
    }
}

export default Task;