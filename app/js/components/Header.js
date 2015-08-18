'use strict';

import React from 'react/addons';
import _                from 'lodash';

var Header = React.createClass({
    render() {

        if ( _.isEmpty(localStorage.getItem('key')) ) {
            var login = <a href="login" className="btn btn-info" style={{'margin-right':'5px'}}>Login</a>
            var register = <a href="register" className="btn btn-success">Register</a>
        }else{
            var logout = <a href="logout" className="btn btn-danger" style={{'margin-right':'5px'}}>Logout</a>
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
                        <a className="navbar-brand" href="#">React and Parse</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <form className="navbar-form navbar-right">
                            {login}
                            {register}
                            {logout}
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Header;
