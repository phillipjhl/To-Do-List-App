//Component for User Input

import React, { Component } from 'react';

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
            <div className="container">
                <form className="form-group col-md-10 bg-light p-2" onSubmit={this.handlePost} >

                    <select id="input-topic" className="form-control">
                        <option defaultValue>Personal</option>
                        <option>Work</option>
                        <option>Family</option>
                    </select>
                    <input type="text" name="text" id="input-text" className="form-control" value={this.state.text} onChange={this.handleChange}/>
                    <input type="text" name="location" id="input-location" className="form-control" value={this.state.location} onChange={this.handleChange}/>
                    <input type="text" name="time" id="input-time" className="form-control" value={this.state.time} onChange={this.handleChange}/>

                </form>
            </div>
        );
    }
}

export default TaskInputPage;