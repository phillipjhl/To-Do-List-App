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
            topic: this.props.data,
            text: this.props.data.text,
            location: this.props.data.location,
            time: this.props.data.time,

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
        console.log(this.state);
        return (
            <article className="card border-primary">

                <div className="card-body pb-1">

                    <form className="form-group">

                        <div className="form-row">

                            <input
                                className="form-control col-10"
                                name="text"
                                value={this.state.text}
                                placeholder={this.state.text}
                                onChange={this.handleChange}
                            >
                            </input>

                            <FontAwesomeIcon icon={faEllipsisV} size="1x" className="float-right col-1" />

                        </div>

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