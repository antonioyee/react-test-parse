'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

var Register = React.createClass({
    render() {
        return (
            <DocumentTitle title="Register">
                <section className="search-page">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Email" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </section>
            </DocumentTitle>
        );
    }
});

export default Register;
