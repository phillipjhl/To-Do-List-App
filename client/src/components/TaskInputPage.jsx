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
    }

    handlePost(e) {
        //to prevent page reload
        e.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <form className="form-group col-md-10 bg-light p-2" onSubmit={this.handlePost} >

                </form>
            </div>
        );
    }
}

export default AdminInput;