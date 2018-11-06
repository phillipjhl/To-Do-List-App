import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ListPage from './ListPage';
import NavBar from './NavBar';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <NavBar />
                        <Route exact path="/" component={HomePage} />
                        <Route path="/list" component={ListPage} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;