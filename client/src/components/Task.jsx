//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //setting passed prop object into state
            task: this.props.data,
            isCompleted: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.state.task);
        return (
            <article className="card border-primary">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.state.task.text}
                        <FontAwesomeIcon icon={faEllipsisV} size="1x" className="float-right" />
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.task.location}</h6>
                    <span className="card-text text-muted">{this.state.task.time}</span>
                </div>
            </article>
        );
    }
}

export default Task;