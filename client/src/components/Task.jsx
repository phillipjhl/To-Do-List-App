//Individual Task Component

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //setting passed prop object into state
            task: this.props.data,
            isCompleted: false,
            isHovered: false
        }
    }

    render() {
        console.log(this.state);
        return (
            <article className="card border-primary">
                <div className="card-body">
                    <h5 className="card-title">{this.state.task.text}</h5>
                    <h6 className="card-subtitle mb-2">{this.state.task.location}</h6>
                    <span className="card-text">{this.state.task.time}</span>
                </div>
            </article>
        );
    }
}

export default Task;