'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var Profile = React.createClass({

    mixins: [AuthenticatedRouteMixin],

    render() {
        return (
            <DocumentTitle title="Profile">
                <section className="search-page">
                    <div className="container">
                        <h3>Profile</h3>
                    </div>
                </section>
            </DocumentTitle>
        );
    }
});

export default Profile;
