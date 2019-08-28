// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

//Instruments
import { book } from './book';
import {login} from '../bus/forms/shapes';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        login: JSON.parse(localStorage.getItem('login')),
    }
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated && login ? (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        ) : (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        )
    }
}
