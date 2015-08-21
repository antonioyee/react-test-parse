'use strict';

import React            from 'react/addons';
import DocumentTitle    from 'react-document-title';
import TweetActions     from '../actions/TweetActions';
import TweetStore       from '../stores/TweetStore';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var Tweet = React.createClass({

    mixins: [AuthenticatedRouteMixin],

    getInitialState: function() {
        return {
            text: ""
        };
    },

    handleChange: function(event) {
        if ( this.state.text.length <= 139) {
            this.setState({ text: event.target.value });
        }
    },

    remainingCharacters: function() {
        return 140 - this.state.text.length;
    },

    handleSubmit(event){
        event.preventDefault();
        var tweet = this.state.text;
        if ( tweet ) {
            if ( TweetActions.postTweetUser(tweet) ){
                this.transitionTo('/all-my-posts');
            }
        }
    },

    render: function() {
        return (
            <DocumentTitle title="Tweet">
                <section className="search-page">
                    <div className="container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="well clearfix">
                                <textarea className="form-control" onChange={this.handleChange} maxLength={140}>{this.state.value}</textarea>

                                <br/>
                                <span>{ this.remainingCharacters() }</span>

                                <button type="submit" className="btn btn-primary pull-right" disabled={this.state.text.length === 0 }>Tweet</button>
                            </div>
                        </form>
                    </div>
                </section>
            </DocumentTitle>

        );
    }

});

export default Tweet;
