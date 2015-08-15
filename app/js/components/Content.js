'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

var Content = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render() {
    return (
        <DocumentTitle title="Home">
            <section className="home-page">
                <div className="container">
                    <span className="lead">Home</span>
                    <div>
                        <Link to="Search">Search</Link>
                    </div>
                </div>
            </section>
        </DocumentTitle>
    );
  }

});

export default Content;
