'use strict';

import React         from 'react/addons';
import DocumentTitle from 'react-document-title';

var NotFound = React.createClass({
    propTypes: {
        currentUser: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <DocumentTitle title="404: Not Found">
                <section className="not-found-page">
                    <span className="lead">Page Not Found</span>
                </section>
            </DocumentTitle>
        );
    }
});

export default NotFound;
