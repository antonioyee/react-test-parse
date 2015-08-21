'use strict';

import React        from 'react/addons';
import {Link}       from 'react-router';
import _            from 'lodash';

var Navigation = require('react-router').Navigation;

var Header = React.createClass({

    mixins: [Navigation],

    onLogin(event){
        event.preventDefault();
        this.transitionTo('/login');
    },

    onRegister(event){
        event.preventDefault();
        this.transitionTo('/register');
    },

    onLogout(event){
        event.preventDefault();

        localStorage.removeItem('key');
        localStorage.removeItem('user')
        localStorage.removeItem('email');
        localStorage.removeItem('createdAt');
        localStorage.removeItem('updatedAt');
        this.transitionTo('/login');
    },

    render() {

        if ( _.isEmpty(localStorage.getItem('key')) ) {
            var login = <a onClick={this.onLogin.bind()} className="btn btn-info" style={{'margin-right':'5px'}}>Login</a>
            var register = <a onClick={this.onRegister.bind()} className="btn btn-success">Register</a>
        }else{
            var tweet = <Link to="Tweet">Tweet</Link>
            var allmyposts = <Link to="AllMyPosts">All My Posts</Link>
            var logout = <a onClick={this.onLogout.bind()} className="btn btn-danger" style={{'margin-right':'5px'}}>Logout</a>
        }

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" onClick={()=>this.transitionTo('/')}>React and Parse</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">

                        <ul className="nav navbar-nav">
                            <li><a href="profile">{localStorage.getItem('email') ? 'USER: ' + localStorage.getItem('email') : ''}</a></li>
                            <li>{localStorage.getItem('email') ? tweet : ''}</li>
                            <li>{ localStorage.getItem('email') ? allmyposts : '' }</li>
                        </ul>

                        <form className="navbar-form navbar-right">

                            {localStorage.getItem('email') ? '' : login }

                            {localStorage.getItem('email') ? '' : register }

                            {localStorage.getItem('email') ? logout : ''}
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Header;
