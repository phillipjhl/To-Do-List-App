import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';

export default class HomePage extends Component {


    render() {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mt-auto mb-auto text-center">

                <main role="main" className="my-5 py-5">
                    <h1 className="cover-heading">Welcome to Your New Way of Doing!</h1>
                    <p className="lead">Create Tasks and Get Them Them Done</p>
                    <Link to="/list" className="btn btn-lg" role="button" aria-label="Let's Get Started">Let's Get Started</Link>
                </main>

                <Footer />

            </div>
        );
    }
}