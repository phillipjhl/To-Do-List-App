//Component for User Input

import React, { Component } from 'react';
import { post } from '../utils/fetch';

class TaskInputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            text: "",
            location: "",
            time: ""
        };

        // Method binding
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    //method to handle the text input and change state
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handlePost(e) {
        // To prevent page reload
        e.preventDefault();
        // Will send a POST request to /api/list
    };

    render() {
        return (
            <div className="fluid-container d-flex">

                <form className="form-group col-md-12 h-100 pt-5 mt-5 mx-auto" onSubmit={this.handlePost} >

                    <label htmlFor="input-topic">Choose a Topic:</label>
                    <select name="topic" id="input-topic" className="form-control mb-3" onChange={this.handleChange}>
                        <option defaultValue>Personal</option>
                        <option>Work</option>
                        <option>Family</option>
                    </select>

                    <input type="text" name="text" id="input-text" className="form-control mb-3" placeholder="What do you need to do?" value={this.state.text} onChange={this.handleChange} />

                    <input type="text" name="location" id="input-location" className="form-control mb-3" placeholder="Location" value={this.state.location} onChange={this.handleChange} />

                    <input type="text" name="time" id="input-time" className="form-control mb-3" placeholder="Time" value={this.state.time} onChange={this.handleChange} />

                    <div className="form-row">
                        <button type="button" className="btn btn-primary w-100 mx-auto" onClick={this.handlePost}>Add New Task</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default TaskInputPage;