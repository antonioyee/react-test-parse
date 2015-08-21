'use strict';

import React                from 'react/addons';
import {ListenerMixin}    from 'reflux';
import DocumentTitle        from 'react-document-title';
import AllMyPostsActions    from '../actions/AllMyPostsActions';
import AllMyPostsStore      from '../stores/AllMyPostsStore';

var AuthenticatedRouteMixin = require('../mixins/AuthenticatedRouteMixin');

var AllMyPosts = React.createClass({

    mixins: [AuthenticatedRouteMixin, ListenerMixin],

    getInitialState() {
        return {
            myTweets: {}
        };
    },

    _onTweetsChange(err, tweets) {
        if ( err ) {
            this.setState({ error: err });
        } else {
            this.setState({ myTweets: tweets || {}, error: null });
        }
    },

    componentDidMount() {
        this.listenTo(AllMyPostsStore, this._onTweetsChange);
        AllMyPostsActions.ListAllMyPosts();
    },

    render: function () {

        if ( this.state.myTweets.length > 0 ) {
            console.log(this.state.myTweets);
        }

        return (
            <DocumentTitle title="All My Posts">
                <section className="search-page">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </DocumentTitle>
        );
    }

});

export default AllMyPosts;
