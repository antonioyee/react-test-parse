'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import _             from 'lodash';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';

var Navigation = require('react-router').Navigation;
var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var Login = React.createClass({
    getInitialState() {
        return (
            { value : '', setState : LoginStore.getState() }
        );
    },

    mixins: [AuthenticatedRouteMixin],

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount(){
        LoginStore.listen(this.onChange);
    },

    componentWillUnmount(){
        LoginStore.unlisten(this.onChange);
    },

    _onChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
    },

    handleSubmit(event){
        event.preventDefault();
        var email = this.state.value;
        if ( email ) {
            LoginActions.loginUser(email);
            this.transitionTo('/');
        }
    },

    render(){
        return (
            <DocumentTitle title="Login">
                <section className="search-page">
                    <div className="container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" placeholder="Email" className="form-control" value={this.state.value} onChange={this._onChange} autoFocus />
                            </div>
                            <button type="submit" className="btn btn-info">Login</button>
                        </form>
                    </div>
                </section>
            </DocumentTitle>
        );
    }
});

export default Login;
