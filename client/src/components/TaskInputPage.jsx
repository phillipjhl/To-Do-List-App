//Component for User Input

import React, { Component, Fragment } from 'react';

import { post } from '../utils/fetch';
import Jumbotron from './Jumbotron';

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
        let data = {
            topic: this.state.topic,
            text: this.state.text,
            location: this.state.location,
            time: this.state.time
        };

        post('/api/list', data)
            .then(() => {
                this.props.history.push('/list');
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <Fragment>

                <Jumbotron titleOne="Add" titleTwo="Task" />

                <div className="fluid-container d-flex bg-light pt-3">

                    <form className="form-group col-md-10 h-100 py-5 mx-auto needs-validation" onSubmit={this.handlePost} >

                        <label htmlFor="input-topic">Choose a Topic:</label>
                        <select name="topic" id="input-topic" className="form-control mb-3" onChange={this.handleChange} required >
                            <option className="bg-white" defaultValue>Personal</option>
                            <option className="bg-white">Work</option>
                            <option className="bg-white">Family</option>
                        </select>

                        <textarea rows="3" type="text" name="text" id="input-text" className="form-control mb-3" placeholder="What do you need to do?" value={this.state.text} onChange={this.handleChange} required/>

                        <input type="text" name="location" id="input-location" className="form-control mb-3" placeholder="Location" value={this.state.location} onChange={this.handleChange} />

                        <input type="text" name="time" id="input-time" className="form-control mb-3" placeholder="Time" value={this.state.time} onChange={this.handleChange} />

                        <div className="form-row">
                            <button type="button" className="btn btn-primary w-100 mx-auto" onClick={this.handlePost}>Add New Task</button>
                        </div>

                    </form>

                </div>

            </Fragment>
        );
    }
}

export default TaskInputPage;