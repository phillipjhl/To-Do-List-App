import React, { Component } from 'react';

export default class HomePage extends Component {


    render() {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mt-auto mb-auto text-center">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Welcome to Your New Way of Doing!</h1>
                    <p className="lead">Create Tasks and Get Them Them Done</p>
                    <p className="lead">
                        {/* will be Link to listPage */}
                        <a href="#" className="btn btn-lg btn-secondary">Let's Get Started</a>
                    </p>
                </main>
            </div>
        );
    }
}