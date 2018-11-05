import React, { Component } from 'react';

export default class HomePage extends Component {


    render() {
        return (
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" class="inner cover">
                    <h1 class="cover-heading">Welcome to Your New Way of Doing!</h1>
                    <p class="lead">Create Tasks and Get Them Them Done</p>
                    <p class="lead">
                        {/* will be Link to listPage */}
                        <a href="#" class="btn btn-lg btn-secondary">Let's Get Started</a>
                    </p>
                </main>
            </div>
        );
    }
}