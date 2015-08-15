'use strict';

import React from 'react/addons';

var Header = React.createClass({
    render() {
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
                            <a href="" className="btn btn-info" style={{'margin-right':'5px'}}>Login</a>
                            <a href="register" className="btn btn-success">Register</a>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Header;
